import Projects from "./pages/Projects";
import PortfolioContainer from "./PortfolioContainer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./Home.css";
import React, { useState, useEffect } from "react";

function Home({ currentPage, handlePageChange }) {
  const [style, setStyle] = useState("card-group");

  const changeStyle = () => {
    setStyle("hidden");
  };
  const [styleHome, setStyleHome] = useState("hidden");

  const changeStyleHome = () => {
    setStyle("card-group");
  };
  return (
    <div>
      <body className="home-body">
       
      </body>
    </div>
  );
}

export default Home;
