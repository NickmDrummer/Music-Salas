import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../styles CSS/bodyVerSala.css";

class BodyVerSala extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row bodyVersala">
            <div className="col-md-3 col-xs-12">
              <h6 className="titles desc">DESCRIPCIÓN</h6>
              <div className="descripcionSala">
                Hay 4 salas de ensayo acustizadas y equipadas de primera linea.
                Alquiler de instrumentos. Bar con escenario para diferentes
                eventos. Venta de bebidas y parrillero en el patio.
              </div>
              <div className="boxDescripcion trans"></div>
            </div>
            <div className="col-lg-5 titles text-center">
              <h6>HACER RESERVA</h6>
            </div>
            <div className="col-lg-4 titles text-center">
              <h6>ENVIAR MENSAJE</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BodyVerSala;
