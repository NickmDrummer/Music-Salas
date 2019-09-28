import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import AvatarSalas from "../img/DZ Estudio.jpg";
import "../styles CSS/rowsalas.css";
import { Link } from "react-router-dom";

class RowSalas extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row tabla ">
          <div className="col-md-1 col-2  align-content-center">
            <img
              src={AvatarSalas}
              alt=""
              className="img-fluid avatarSalas rounded-circle"
            />
          </div>
          <div className="col-md col-2 text-center align-self-center align-content-center ">
            <p>SOS Salas de Ensayo</p>
          </div>
          <div className="col-md col-3 text-center align-self-center align-content-center">
            <p>3415803577</p>
          </div>
          <div className="col-md col-3 text-center align-self-center align-content-center">
            <p>avellaneda bis 6567</p>
          </div>
          <Link
            to="/secversala"
            className="btnvp hvr-pulse-shrink btn col-md col-2 align-self-center align-content-center "
            href="#"
            role="button"
          >
            Ver Perfil
          </Link>
        </div>
      </div>
    );
  }
}

export default RowSalas;
