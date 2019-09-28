import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../styles CSS/salas.css";
import RowSalas from "./rowsalas";

class Salas extends React.Component {
  render() {
    return (
      <div className="salas">
        <div className="text-center">
          <h5 className="titulo float-center">SALAS</h5>
        </div>

        <ul
          className="nav  bg-white  rounded nav-pills nav-fill nav-justified mb-3"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item hvr-rectangle-out">
            <a
              className="nav-link active align-self-center"
              id="pills-centro-tab"
              data-toggle="pill"
              href="#pills-centro"
              role="tab"
              aria-controls="pills-centro"
              aria-selected="true"
            >
              Zona Centro
            </a>
          </li>
          <li className="nav-item hvr-rectangle-out">
            <a
              className="nav-link align-self-center"
              id="pills-norte-tab"
              data-toggle="pill"
              href="#pills-norte"
              role="tab"
              aria-controls="pills-norte"
              aria-selected="false"
            >
              Zona Norte
            </a>
          </li>

          <li className="nav-item hvr-rectangle-out">
            <a
              className="nav-link align-self-center"
              id="pills-sur-tab"
              data-toggle="pill"
              href="#pills-sur"
              role="tab"
              aria-controls="pills-sur"
              aria-selected="false"
            >
              Zona Sur
            </a>
          </li>

          <li className="nav-item hvr-rectangle-out">
            <a
              className="nav-link "
              id="pills-oeste-tab"
              data-toggle="pill"
              href="#pills-oeste"
              role="tab"
              aria-controls="pills-oeste"
              aria-selected="false"
            >
              Zona Oeste
            </a>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-centro"
            role="tabpanel"
            aria-labelledby="pills-centro-tab"
          >
            <div>
              <RowSalas />
              <RowSalas />
              <RowSalas />
              <RowSalas />
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="pills-norte"
            role="tabpanel"
            aria-labelledby="pills-norte-tab"
          >
            <div>
              <RowSalas />
              <RowSalas />
              <RowSalas />
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="pills-sur"
            role="tabpanel"
            aria-labelledby="pills-sur-tab"
          >
            <div>
              <RowSalas />
              <RowSalas />
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="pills-oeste"
            role="tabpanel"
            aria-labelledby="pills-oeste-tab"
          >
            <div>
              <RowSalas />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Salas;
