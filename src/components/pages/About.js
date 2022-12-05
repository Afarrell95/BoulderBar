import React from "react";
import "./About.css";
import picture from "./img/headshot2.jpg";



export default function About() {
  return (
    <div>
      <body className="body">
        <header className="heading">
          <h1>Hello! My name is Allison.</h1>
        </header>

        <div className="head-shot">
          <img className="head-img"
            
            src={picture}
            alt="Allison's headshot image"
          />
        </div>
        <section className="para">
          <p>
            Former trauma hospital worker of 5 years turned Frontend Developer.
            A Savannah, GA transplant born and raised in South Jersey.
          </p>
          <br />
          <p>
            When I'm not in the gym or with my cat and 3 dogs, I'm on my
            computer coding responsive and accessible websites and furthuring my
            Frontend skillset.
          </p>
          <br />
        </section>
      </body>
    </div>
  );
}
