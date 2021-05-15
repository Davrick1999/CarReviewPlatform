import React from "react";
import firestore, { auth } from "../firebase";

import { useCollectionData } from "react-firebase-hooks/firestore";

function ChatRoom() {
  const messageRef = firestore.collection("messages");

  const query = messageRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  return (
    <>
      <div>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
      </div>
    </>
  );
}

function ChatMessage(props) {
  const { text, uid } = props.message;

  return (
    <>
      <div className="my-profile">
        <h3>{text}</h3>

        <p>
          <button onClick={() => auth.signOut()} className="btn btn-outline">
            Sign Out
          </button>
        </p>
      </div>
    </>
  );
}

export default ChatRoom;
