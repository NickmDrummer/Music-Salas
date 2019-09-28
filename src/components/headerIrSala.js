import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../styles CSS/headerIrSala.css";
import AvatarSalas from "../img/DZ Estudio.jpg";
import Portada from "../img/DZ portada.jpg";

class HeaderIrSala extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="divportada col-md-12  col-sm-12 col-lg-12">
              <div className="text-center">
                <img
                  src={Portada}
                  className="portada mx-auto d-block rounded img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="divavatar col-md-3 col-sm-12 col-xs-12">
            <div className="text-center col-xs-12">
              <img
                src={AvatarSalas}
                className="rounded-circle img-thumbnail perfilphoto img-fluid"
                alt=""
              ></img>
              <div className="text-center">
                <h3 className="nombrePerfil">DZ ESTUDIO</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderIrSala;
