import React from "react";
import "./Contact.css";

const styles = {
  body: {
    background: "rgba(255,255,255,.4)",
    borderRadius: "5px",
    display: "grid",
    placeItems: "center",
    margin: "auto",
    width: "50%",
    fontFamily: "poppins",
    boxShadow: "0px 0px 5px 1px rgba(116, 117, 128, 0.66)",
  },
  heading: {
    background: "rgba(255,255,255,.6)",
    borderRadius: "5px 5px 0px 0px",
    color: "navy",
    fontSize: "20px",
    width: "100%",
    height: "15vmin",
    textalign: "center",
  },
  spans: {
    color: "navy",
    fontSize: "20px",
    letterSpacing: "1.5px",
    lineHeight: "2.5",
    display: "flex",
    flexDirection: "column",
  },
};

export default function Contact() {
  return (
    <div className="contain">
      <body style={styles.body}>
        <header style={styles.heading}>
          <h1>Want to get in touch?</h1>
        </header>
        <section>
          <span style={styles.spans}> Email: farrella95@gmail.com</span>

          <span style={styles.spans}>Phone: (856)-562-5881 </span>
          <span style={styles.spans}>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/allison-farrell-6815a0214/"
            >
              LinkedIn
            </a>
          </span>
          <span style={styles.spans}>
            <a target="_blank" href="https://twitter.com/Allison_WebDev">
              Twitter
            </a>
          </span>
          <span style={styles.spans}>
            <a target="_blank" href="https://github.com/Afarrell95">
              {" "}
              GitHub
            </a>
          </span>
        </section>
      </body>
    </div>
  );
}
