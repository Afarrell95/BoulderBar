import React from "react";

const styles = {
  body: {
    margin: "auto",
    background: "#eedbff;",
  },
  heading: {
    background: "#FFB9B9",
    color: "rgb(19, 38, 61)",
    fontsize: "1.3rem",
    width: "100%",
    height: "15vmin",
    textalign: "center",
  },
};

export default function About() {
  return (
    <div>
      <body style={styles.body}>
        <header style={styles.headingheading}>
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
        <a>
          <button>Back to home page</button>
        </a>
      </body>
    </div>
  );
}
