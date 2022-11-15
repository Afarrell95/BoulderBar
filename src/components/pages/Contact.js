import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div>
      <body>
        <h1>Want to get in touch?</h1>
        <section>
          Email: farrella95@gmail.com Phone: (856)-562-5881 LinkedIn:
          https://www.linkedin.com/in/allison-farrell-6815a0214/ GitHub:
          https://github.com/Afarrell95
        </section>
        <a href="#home" onClick={() => handlePageChange("Home")}>
          <button>Back to home page</button>
        </a>
      </body>
    </div>
  );
}
