import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./headerIrSala.css";
import AvatarSalas from "../../img/DZ Estudio.jpg";
import Portada from "../../img/DZ portada.jpg";

class HeaderIrSala extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card mb-3">
              <img src={Portada} class="card-img-top cardportada" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  <img
                    src={AvatarSalas}
                    className="rounded-circle img-thumbnail perfilphoto img-fluid"
                    alt=""
                  ></img>
                  DZ Estudio
                </h5>
                <p className="card-text">
                  DZ es un espacio pensando para el músico, disponemos de
                  amplias salas de ensayo acondicionadas apropiadamente para las
                  diferentes etapas de producción.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderIrSala;
