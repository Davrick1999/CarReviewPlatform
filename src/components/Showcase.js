import React from "react";
import "./Showcase.css";

function Showcase() {
  return (
    <section class="showcase">
      <div class="container grid">
        <div class="showcase-text">
          <h1>Easier Deployment</h1>
          <p>
            Deploy web apps of all kinds, from large scale enterprise APIs to
            static websites for individuals. Fill out the form to try a demo of
            our platform
          </p>
          <a href="#" class="btn btn-outline">
            Read More
          </a>
        </div>

        <div class="showcase-form card">
          <h2>Register</h2>

          <form>
            <div class="form-control">
              <input type="text" name="name" placeholder="Name" required />
            </div>
            <div class="form-control">
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                required
              />
            </div>
            <div class="form-control">
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <input type="submit" value="Send" class="btn btn-primary" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
