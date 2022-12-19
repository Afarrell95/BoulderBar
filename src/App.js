import React from "react";
import Navbar from "./components/pages/nav"
import Footer from "./components/pages/footer"
import Shoes from "./components/pages/shoes";
import Chalk from "./components/pages/chalk";
import Clothes from "./components/pages/clothes"
import Train from "./components/pages/train";
import Crash from "./components/pages/crash";
import Home from "./components/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
    return (
      <Router>
        <div>
        <Navbar />
      </div>
        <Routes>
          <Route path="/Portfolio" element={<Home />}>
            <Route path="shoes" element={<Shoes />} />
            <Route path="crashpads" element={<Crash />} />
            <Route path="training" element={<Train />} />
            <Route path="chalkacessories" element={<Chalk />} />
            <Route path="clothes" element={<Clothes />} />
          </Route>
        </Routes>
        <div>
        
        <Footer />
      </div>
      </Router>
    );
  }

export default App;
