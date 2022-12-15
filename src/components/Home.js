import Projects from "./pages/Projects";
import PortfolioContainer from "./PortfolioContainer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./Home.css";
import React, { useState, useEffect } from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import logo from "./imgs/cover.png";
import "bootstrap/dist/css/bootstrap.min.css";

function Home({ currentPage, handlePageChange }) {
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
        <nav className="navbar navbar-expand-lg navbar-dark "style={{backgroundColor: "#55514D"}}>
          <a className="navbar-brand" href="#">
            <img src={logo} style={{ width: "150px", borderRadius: 5 }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  something
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    Link 1
                  </a>
                  <a className="dropdown-item" href="#">
                    Link 2
                  </a>
                  <a className="dropdown-item" href="#">
                    Link 3
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Cart
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search Products"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-light my-2 my-sm-0"
                
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
        <nav class="navbar bg-light navbar-expand">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link 1
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link 2
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link 3
              </a>
            </li>
          </ul>
        </nav>

        <div className="main-page-container">
          <div className="home-content-mission">
            <h3>Our Mission</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
          </div>
          <div className="home-content-adds">
            <h3>wooooo look at all this content</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>

        <MDBFooter
          bgColor="light"
          className="text-center text-lg-start text-muted" 
        >
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>

            <div>
              <a href="" className="me-4 text-reset">
                <MDBIcon fab icon="facebook-f" />
              </a>
              <a href="" className="me-4 text-reset">
                <MDBIcon fab icon="twitter" />
              </a>
              <a href="" className="me-4 text-reset">
                <MDBIcon fab icon="google" />
              </a>
              <a href="" className="me-4 text-reset">
                <MDBIcon fab icon="instagram" />
              </a>
              <a href="" className="me-4 text-reset">
                <MDBIcon fab icon="linkedin" />
              </a>
              <a href="" className="me-4 text-reset">
                <MDBIcon fab icon="github" />
              </a>
            </div>
          </section>

          <section className="">
            <MDBContainer className="text-center text-md-start mt-5 ">
              <MDBRow className="mt-3">
                <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    <MDBIcon icon="gem" className="me-3" />
                    Become A Member
                  </h6>
                  <p>
                    Anyone can join and everyone belongs. Benefits include great
                    gear offers, special pricing on events and an annual Member
                    Reward
                  </p>
                </MDBCol>

                <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    Orders & Returns
                  </h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Order Status
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Return Policy
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Return Instructions
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Shipping Info
                    </a>
                  </p>
                </MDBCol>

                <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Work With Us</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Jobs and Careers
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Sell at Boulder Bar
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Affiliate Program
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Culture
                    </a>
                  </p>
                </MDBCol>

                <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <MDBIcon icon="home" className="me-2" />
                    Electric Ave, NJ 123987, US
                  </p>
                  <p>
                    <MDBIcon icon="envelope" className="me-3" />
                    boulderbar@example.com
                  </p>
                  <p>
                    <MDBIcon icon="phone" className="me-3" /> + 01 856 867 5309
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>

          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            © 2022 Copyright:
            <a className="text-reset" href="https://mdbootstrap.com/">
              BoulderBar.com
            </a>
          </div>
        </MDBFooter>
      </body>
    </div>
  );
}

export default Home;
