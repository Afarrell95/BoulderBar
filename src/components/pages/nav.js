import Shoes from "./shoes";
import Chalk from "./chalk";
import Clothes from "./clothes"
import Train from "./train";
import Crash from "./crash";
import "./nav.css";
import { Link } from "react-router-dom";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import logo from "../imgs/cover.png";
import "bootstrap/dist/css/bootstrap.min.css";
function Navbar() {
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
        <nav
          className="navbar navbar-expand-lg navbar-dark "
          style={{ backgroundColor: "#594545" }}
        >
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
                <Link to="/Portfolio">Home</Link> 
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Profile
                </a>
              </li>
            
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Shopping cart{" "}
                  <img
                    classNmae="cart-img"
                    src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-royal-brites-poster-foam-board-photo-paper-royal-lace-19.png"
                    alt="cart img"
                    style={{ width: "23px" }}
                  />
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
        <nav
          class="navbar navbar-dark navbar-expand"
          style={{ backgroundColor: "#9E7676", borderRadius: "0 0 5px 15px" }}
        >
          <span>shop by category</span>
          <ul className="navbar-nav">
        
            <li className="nav-item">
              <a className="nav-link" href="#">
              <Link to="/shoes">shoes</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              <Link to="/crash">crash pads</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              <Link to="/clothes">clothes</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              <Link to="/chalk">chalk & acessories</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              <Link to="/train">training equipment</Link>
              </a>
            </li>
          </ul>
        </nav>
          </div>
    )}

export default Navbar;