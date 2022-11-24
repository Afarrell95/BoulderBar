import React from "react";
import "./About.css";
import picture from "./img/headshot2.jpg";

const styles = {
  pic: {
    width: "200px",
    borderRadius: "50%",
    border: "double #150445 10px",
    transform: "translateY(-9%)",
  },

  body: {
    background: "rgba(225, 230, 211, 1)",
    borderRadius: "5px",
    display: "grid",
    placeItems: "center",
    margin: "auto",
    width: "60%",
    transform: "translateY(5%)",
    fontFamily: "poppins",
    boxShadow: "0px 0px 5px 1px rgba(116, 117, 128, 0.66)",
  },
  heading: {
    background: "rgba(255,255,255,.8)",
    display: "grid",
    placeItems: "center",
    borderRadius: "5px 5px 0px 0px",
    color: "#150445",
    fontSize: "20px",
    width: "100%",
    height: "20vmin",
  },
  para: {
    color: "#150445",
    textIndent: "50px",
    paddingLeft: "20px",
    paddingRight: "20px",
    width: "70%",
    letterSpacing: "1.5px",
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
          <img
            style={styles.pic}
            src={picture}
            alt="Allison's headshot image"
          />
        </div>
        <section style={styles.para}>
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
