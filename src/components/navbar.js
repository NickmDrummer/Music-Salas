import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles CSS/navbar.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Avatar from "../img/nick.jpg";
import { Link } from "react-router-dom";
import Logo from "../img/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

class Navbar extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <nav className="navbar fixed-top navbar-expand">
          <Link className="navbar-brand text-center img-fluid" to="/secsalas">
            <img src={Logo} alt="" className="logo rounded img-fluid" />
          </Link>

          <div className="collapse navbar-collapse" id="navbarsExample02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-link">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </li>
              <li className="nav-link dropdown">
                <a className=" avatar nav-link " href="#">
                  <img src={Avatar} className=" img-fluid rounded-circle"></img>
                </a>
              </li>
              <li className="nav-link">
                <a className="btn btnmp" href="#" role="button">
                  Cerrar Sesión
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
