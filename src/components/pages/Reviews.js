import React, { useState, useEffect } from "react";
import { auth, firestore, storage } from "../../firebase";
import makeId from "../../functions/makeId";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import firebase from "firebase";

function Reviews() {
  const [user, setUser] = useState(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [country, setCountry] = useState("");
  const [video, setVideo] = useState(null);
  const [progress, setProgress] = useState(0);

  const [videos, setVideos] = useState([]);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setVideo(e.target.files[0]);

      var selectedVideoSrc = URL.createObjectURL(e.target.files[0]);

      var videoPreview = document.getElementById("video-preview");
      //var videoSrc = document.getElementById("videoSrc");

      videoPreview.src = selectedVideoSrc;
      videoPreview.style.display = "block";
    }
  };

  const handleUpload = () => {
    if (title && price && country && video) {
      var videoName = makeId(16);
      const uploadTask = storage.ref(`videos/${videoName}.mp4`).put(video);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          //progress function
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          //upload
          storage
            .ref("videos")
            .child(`${videoName}.mp4`)
            .getDownloadURL()
            .then((videoUrl) => {
              firestore.collection("reviews").add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                title: title,
                price: price,
                country: country,
                videoUrl: videoUrl,
                username: user.email.replace("@gmail.com", ""),
              });
            });

          //clear out the form
          setTitle("");
          setPrice("");
          setCountry("");
          setProgress(0);
          setVideo(null);
        }
      );
    }
  };

  useEffect(() => {
    firestore.collection("reviews").onSnapshot((snapshot) => {
      setVideos(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })));
    });
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email,
      };
      if (userAuth) {
        console.log(userAuth);
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <div className="reviews">
      <div className="grid grid-3-reviews m-1">
        <div className="grid grid-3-only card card-outline">
          {videos.map(({ id, post }) => {
            return (
              <div key={id} className="card card-filled row p-0">
                <div className="column1 review-image">
                  {/* <img
                    src="https://www.w3schools.com/howto/img_avatar.png"
                    alt=""
                    style={{ width: "100%", borderRadius: "5%" }}
                  /> */}
                  <video
                    style={{
                      width: "100%",
                      margin: "8px 0",
                    }}
                    controls
                  >
                    <source src={post.videoUrl} type="video/mp4" />
                  </video>
                </div>
                <div className="column2 review-info">
                  <h4>{post.title}</h4>
                  <p className="my-05">{`Price: ${post.price}`}</p>
                  <p>{`Country: ${post.country}`}</p>
                </div>
              </div>
            );
          })}
        </div>
        {user && (
          <div className="card card-outline flex flex-cl">
            <label htmlFor="carVideo">
              <AddAPhotoIcon style={{ cursor: "pointer", fontSize: "7rem" }} />
            </label>
            <input
              id="carVideo"
              type="file"
              accept="video/*"
              style={{ display: "none" }}
              required
              onChange={handleFileChange}
            />
            <video
              id="video-preview"
              style={{ display: "none", height: "100px", margin: "8px 0" }}
            >
              <source id="videoSrc" type="video/mp4" />
            </video>
            <input
              value={title}
              type="text"
              name="title"
              placeholder="Title"
              required
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <input
              value={price}
              type="text"
              name="price"
              placeholder="Price"
              required
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            <input
              value={country}
              type="text"
              name="country"
              placeholder="Country"
              required
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            />
            <input
              type="submit"
              value={`Upload ${progress !== 0 ? progress : ""}`}
              onClick={handleUpload}
              class="btn btn-primary"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Reviews;
