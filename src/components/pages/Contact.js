import React from "react";
import "./Contact.css";


export default function Contact() {
  return (
    <div className="contain">
      <body className="body">
        <header className="heading">
          <h1>Want to get in touch?</h1>
        </header>
        <section>
          <span className="spans"> Email: farrella95@gmail.com</span>

          <span className="spans">Phone: (856)-562-5881 </span>
          <span className="spans">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/allison-farrell-6815a0214/"
            >
              LinkedIn
            </a>
          </span>
          <span className="spans">
            <a target="_blank" href="https://twitter.com/Allison_WebDev">
              Twitter
            </a>
          </span>
          <span className="spans">
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
