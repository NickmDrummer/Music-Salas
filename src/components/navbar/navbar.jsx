import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../navbar/navbar.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import Logo from "../../img/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand">
        <div className="container">
          <Link className="navbar-brand text-center img-fluid" to="/secsalas">
            <img src={Logo} alt="" className="logo rounded" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample02"
            aria-controls="navbarsExample02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="">
            <ul className="navbar-nav ml-auto">
              <li className="nav-link">
                <a className="nav-link iconosnavbar " href="#">
                  <FontAwesomeIcon className="iconosnavbar" icon={faBell} />
                </a>
              </li>
              <li className="nav-link iconouser dropdown">
                <a
                  className="nav-link iconosnavbar dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <FontAwesomeIcon
                    className="iconosnavbar "
                    icon={faUserCircle}
                  />
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="#">
                    Mi Perfil
                  </a>
                  <a className="dropdown-item" href="#">
                    Cerrar Sesión
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;
