import React from "react";
import "./Projects.css";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <body>
        <header>
          <h1>Some of my work</h1>
        </header>

        <section class="proj-container">
          <div class="proj">
            <a
              target="_blank"
              href="https://codepen.io/farrella95/full/VwXdXoJ"
            >
              NASA API
            </a>
          </div>
          <div class="proj">
            <a target="_blank" href="https://ecbl.netlify.app/">
              Climbing Gym Website
            </a>
          </div>
          <div class="proj">
            <a
              target="_blank"
              href="https://chattastic-rat.herokuapp.com/login"
            >
              Chattastic Chatroom App
            </a>
          </div>
          <div class="proj"></div>
        </section>

        <a href="#home" onClick={() => handlePageChange("Home")}>
          <button>Back to home page</button>
        </a>
      </body>
    </div>
  );
}
