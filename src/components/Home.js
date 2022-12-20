import Shoes from "./pages/shoes";
import Chalk from "./pages/chalk";
import Clothes from "./pages/clothes"
import Train from "./pages/train";
import Crash from "./pages/crash";
import "./Home.css";
import { Link } from "react-router-dom";

import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div>
      <head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
          integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
          crossorigin="anonymous"
        />
      </head>

      <body className="home-body">
     

        <div className="main-page-container">
          <div className="home-content-mission">
            <h3>Our Mission</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.{" "}
            </p>
          </div>
          <div className="home-content-adds">
           something something something maybe carosuel or whatever idk how to spell it
          </div>
        </div>

      </body>
    </div>
  );
}

export default Home;
