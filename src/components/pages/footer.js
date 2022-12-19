import React from "react"

import {
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
  } from "mdb-react-ui-kit";
  
  import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
    return (
        <div>
<MDBFooter
bgColor="light"
className="text-center text-lg-start text-muted"
>
<section className="d-flex justify-content-center p-4 border-bottom">
  <div className="me-5 d-none d-lg-block">
    <span>Check us out on our social networks:</span>
  </div>

  <div>
    <a href="" className="me-4 text-reset">
      <img
        src="https://seeklogo.com/images/F/facebook-logo-966BBFBC34-seeklogo.com.png"
        alt="facebook logo"
        style={{ width: "30px" }}
      />
    </a>
    <a href="" className="me-4 text-reset">
      <img
        src="https://seeklogo.com/images/I/instagram-new-2016-logo-4773FE3F99-seeklogo.com.png"
        alt="instagram logo"
        style={{ width: "30px" }}
      />
    </a>
    <a href="" className="me-4 text-reset">
      <img
        src="https://seeklogo.com/images/T/twitter-icon-circle-blue-logo-94339974C6-seeklogo.com.png"
        alt="twitter logo"
        style={{ width: "30px" }}
      />
    </a>
    <a href="" className="me-4 text-reset">
      <img
        src="https://seeklogo.com/images/Y/youtube-2017-icon-logo-D1FE045118-seeklogo.com.png"
        alt="youtube logo"
        style={{ width: "30px" }}
      />
    </a>
    <a href="" className="me-4 text-reset">
      <img
        src="https://seeklogo.com/images/T/tiktok-app-icon-logo-0F5AD7AE01-seeklogo.com.png"
        alt="tik tok logo"
        style={{ width: "30px" }}
      />
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
  style={{ backgroundColor: "#594545", color: "white" }}
>
  © 2022 Copyright:
  <a className="text-reset" href="https://mdbootstrap.com/">
    BoulderBar.com
  </a>
</div>
</MDBFooter>
</div>
)}

export default Footer