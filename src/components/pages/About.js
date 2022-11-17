import React from "react";
import "./About.css";

const styles = {
  body: {
    background: "rgba(255,255,255,.25)",
    borderRadius: "5px",
    display: "grid",
    placeItems: "center",
    margin: "auto",
    width: "50%",
    transform: "translateY(100%)",
    fontFamily: "poppins",
  },
  heading: {
    background: "rgba(255,255,255,.45)",
    borderRadius: "5px 5px 0px 0px",
    color: "rgb(19, 38, 61)",
    fontSize: "20px",
    width: "100%",
    height: "15vmin",
    textalign: "center",
  },
};

export default function About() {
  return (
    <div>
      <body style={styles.body}>
        <header style={styles.heading}>
          <h1>Hello! My name is Allison.</h1>
        </header>

        <div className="head-shot">
          <img src="./img/headshot2.jpg" alt="Allison's headshot image" />
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
      </body>
    </div>
  );
}
