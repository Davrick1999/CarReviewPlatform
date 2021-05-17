import React, { useState, useEffect } from "react";
import { auth, firestore } from "../firebase";

import { useCollectionData } from "react-firebase-hooks/firestore";

function ChatRoom() {
  const [user, setUser] = useState(null);

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
          <div className="card card-outline flex flex-cl"></div>
        </div>
      </div>
    </>
  );
}

export default ChatRoom;
