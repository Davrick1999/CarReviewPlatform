import React, { useState, useEffect } from "react";
import { auth, firestore } from "../firebase";

import { useCollectionData } from "react-firebase-hooks/firestore";

function ChatRoom() {
  const [user, setUser] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    firestore.collection("reviews").onSnapshot((snapshot) => {
      setReviews(
        snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() }))
      );
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

  // const messageRef = firestore.collection("messages");

  // const query = messageRef.orderBy("createdAt").limit(25);

  // const [messages] = useCollectionData(query, { idField: "id" });

  return (
    <>
      <div className="my-profile">
        <div className="grid grid-3-profile m-1">
          <div className="card card-outline flex flex-cl">
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="Avatar"
              class="avatar-lg"
            />

            <h3 className="m-05">{user && user.email}</h3>

            <button
              onClick={() => auth.signOut()}
              className="btn btn-dark-outline width-100"
            >
              Sign Out
            </button>
            <div className="btn-dark-outline width-100">
              <h4>
                Reviews: <span>25</span>
              </h4>
              <h4>Total views: 3.7m</h4>
            </div>
          </div>
          <div className="card card-outline">
            <div
              style={{
                margin: "0 10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <ul
                className="profile-tabs"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, auto)",
                  gridGap: "1rem",
                  listStyle: "none",
                  fontWeight: "bold",
                }}
              >
                <li
                  onClick={() => setActiveTab(0)}
                  style={{ color: activeTab === 0 && "#ff5c00" }}
                >
                  Overview
                </li>
                <li
                  onClick={() => setActiveTab(1)}
                  style={{ color: activeTab === 1 && "#ff5c00" }}
                >
                  Reviews
                </li>
                <li
                  onClick={() => setActiveTab(2)}
                  style={{ color: activeTab === 2 && "#ff5c00" }}
                >
                  Favorites
                </li>
              </ul>
            </div>
            <hr style={{ margin: "10px", color: "#FF5C00" }} />
            <h4 style={{ margin: "0 10px" }}>
              {" "}
              {activeTab === 0 && "Popular reviews"}
            </h4>
            <h4 style={{ margin: "0 10px" }}>
              {" "}
              {activeTab === 1 && "Reviews"}
            </h4>

            <h4 style={{ margin: "0 10px" }}>
              {" "}
              {activeTab === 2 && "Favorites"}
            </h4>

            <div
              className="grid grid-2 card card-outline"
              style={{
                border: "none",
                boxShadow: "none",
                background: "transparent",
                padding: "0",
              }}
            >
              {activeTab === 0 &&
                reviews
                  .filter((item, id) => id < 5)
                  .map(({ id, post }) => {
                    return (
                      <div key={id} className="card card-outline row p-0">
                        <div
                          className="review-image"
                          style={{ padding: "16px", cursor: "pointer" }}
                        >
                          <h4 style={{ color: "#47BDFF" }}>{post.title}</h4>
                        </div>
                        <div
                          className="review-info"
                          style={{ padding: "8PX 16px" }}
                        >
                          <p className="my-05">{`Price: ${post.price}`}</p>
                          <p>{`Country: ${post.country}`}</p>
                        </div>
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatRoom;
