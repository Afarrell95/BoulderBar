import React from "react";
import "./Projects.css";

export default function Home() {
  return (
    <div>
      <body>
        <section className="proj-container">
          <div className="proj">
            <a
              target="_blank"
              href="https://codepen.io/farrella95/full/VwXdXoJ"
            >
              <h3>NASA API</h3>
            </a>
            <p>
              A simple and fun app that pulls data from NASA's official API to
              display the picture of the day!
            </p>
          </div>
          <div className="proj">
            <a target="_blank" href="https://ecbl.netlify.app/">
              <h3>Climbing Gym Website</h3>
            </a>
            <p>
              A mock website for a rock climbing gym with mobile responsiveness{" "}
            </p>
          </div>
          <div className="proj">
            <a
              target="_blank"
              href="https://chattastic-rat.herokuapp.com/login"
            >
              <h3>Chattastic!</h3>
            </a>
            <p>
              A chatroom website created in a team collaberation. Users are able
              to have conversations via chatroom in real time!
            </p>
          </div>
          <div className="proj">
            <a
              target="_blank"
              href="https://afarrell95.github.io/Color-palette-/"
            >
              <h3>Color Palette</h3>
            </a>
            <p>
              A simple app where users can gereate a color palette and save ones
              they like to a library.
            </p>
          </div>
        </section>
      </body>
    </div>
  );
}
