import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import AvatarSalas from "../../img/DZ Estudio.jpg";
import "./cardSala.css";
import { Link } from "react-router-dom";
import Portada from "../../img/DZ portada.jpg";

class CardSala extends React.Component {
  render() {
    return (
      <div className="col-lg-6 col-md-6 col-xl-3">
        <div className="card text-center">
          <img src={Portada} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title h5clase">DZ Estudio</h5>
            <p className="card-text parrafo">
              Hay 4 salas de ensayo acustizadas y equipadas de primera linea.
              Alquiler de instrumentos. Bar con escenario para diferentes
              eventos. Venta de bebidas y parrillero en el patio.
            </p>
            <Link
              to="/secversala"
              className="btnsolicitarreserva btn "
              href="#"
              role="button"
            >
              Solicitar Reserva
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default CardSala;
