import Shoes from "./pages/shoes";
import Chalk from "./pages/chalk";
import Clothes from "./pages/clothes";
import Train from "./pages/train";
import Crash from "./pages/crash";
import "./Home.css";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

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
            <h3>Great gear. Better prices</h3>
            <Carousel>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1522362485439-83fcff4673f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  style={{ width: "700px" }}
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1557851031-0b7caefbdead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  style={{ width: "700px" }}
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1478827227954-745b0daf2534?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  style={{ width: "700px" }}
                />
              </div>
            </Carousel>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Home;
