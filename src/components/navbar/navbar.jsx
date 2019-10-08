import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../navbar/navbar.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import Logo from "../../img/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBell } from "@fortawesome/free-solid-svg-icons";
import Avatar from "../../img/nick.jpg";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand navbar-light">
        <Link to="/secsalas" className="navbar-brand nav-link">
          <img
            src={Logo}
            alt=""
            className="logo rounded d-inline-block align-top"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="navbar-brand " to="#">
                <img
                  src={Avatar}
                  alt=""
                  className="avatar rounded-circle d-inline-block align-top"
                  data-toggle="tooltip"
                  data-placement="left"
                  title="Ir a Mi Perfil"
                />
              </Link>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                <FontAwesomeIcon className="iconosnavbar" icon={faBell} />
                <span className="mensaje ">Mensajes</span>
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link  dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              ></a>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  Mi cuenta
                </a>
                <a className="dropdown-item" href="#">
                  Cerrar Sesión
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navbar;
