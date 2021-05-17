import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

firebase.initializeApp({
  apiKey: "AIzaSyC9Sww73OLlHe2zvIxcyNfyXPiDma7BIPM",
  authDomain: "cars-web-55e01.firebaseapp.com",
  projectId: "cars-web-55e01",
  storageBucket: "cars-web-55e01.appspot.com",
  messagingSenderId: "340389572072",
  appId: "1:340389572072:web:f3f5315f81b43d7b8c085d",
  measurementId: "G-K05C4CX5VX",
});

const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

export { auth, firestore, storage };
