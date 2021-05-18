import React, { useState, useRef } from "react";
import "./Showcase.css";
import { auth, storage, firestore } from "../firebase";
import firebase from "firebase";

function Showcase() {
  const [toggleForm, setToggleForm] = useState(true);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signUp = (e) => {
    e.preventDefault();

    //upload
    firestore.collection("users").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profileImageUrl: null,
      email: emailRef.current.value,
    });

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const login = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section class="showcase">
      <div class="container grid">
        <div class="showcase-text">
          <h1>Car Reviews</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
            rerum beatae ab consectetur ratione facere natus quos expedita nemo
            consequuntur exercitationem porro perspiciatis provident, saepe,
            nobis praesentium doloribus? Unde, eius!
          </p>
          <a href="/" class="btn btn-outline">
            Read More
          </a>
        </div>

        <div class="showcase-form card">
          <h2>{!toggleForm ? "Register" : "Login"}</h2>

          <form>
            <div class="form-control">
              <input
                ref={emailRef}
                type="text"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div class="form-control">
              <input
                ref={passwordRef}
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>

            <div class="form-control">
              <p
                style={{ cursor: "pointer" }}
                onClick={() => setToggleForm(!toggleForm)}
              >
                {!toggleForm
                  ? "Already have an account? Login"
                  : "First time here? Sign up"}
              </p>
            </div>
            <input
              type="submit"
              value={!toggleForm ? "Sign up" : "Login"}
              onClick={!toggleForm ? signUp : login}
              class="btn btn-primary"
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
