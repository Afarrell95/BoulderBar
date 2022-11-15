import React from "react";
import "./About.css";

export default function About() {
  return (
    <div>
      <body>
        <header>
          <h1>Hello! My name is Allison.</h1>
        </header>

        <div className="head-shot">
          <img src="../img/headshot2.jpg" alt="Allison's headshot image" />
        </div>
        <section>
          <p>
            Former trauma hospital worker of 5 years turned Frontend Developer.
            A Savannah, GA transplant born and raised in South Jersey.
          </p>
          <br />
          <p>
            When I'm not in the gym or with my 3 dogs, I'm on my computer coding
            responsive and accessable websites and furthuring my Frontend
            skillset.
          </p>
          <br />
        </section>
        <a href="#home" onClick={() => handlePageChange("Home")}>
          <button>Back to home page</button>
        </a>
      </body>
    </div>
  );
}
