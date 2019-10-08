import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./salas.css";
import CardSala from "../cardSala/cardSala";
import { animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";

class Salas extends React.Component {
  // Desplamiento hasta el borde superior de la página
  onClickUp = () => {
    scroll.scrollToTop();
  };
  render() {
    return (
      <div className="salas">
        <div className="container d-flex justify-content-center">
          <form className="form-inline d-flex justify-content-center">
            <input
              className="form-control mr-sm-2 buscador"
              type="search"
              placeholder="Buscar Salas"
              aria-label="Buscar salas"
            />
          </form>
        </div>

        <div className="text-center ">
          <h5 className="titulo">SALAS</h5>
        </div>

        <ul
          className="nav textozona bg-white   rounded nav-pills nav-fill nav-justified mb-3"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item hvr-rectangle-out">
            <a
              className="nav-link navlink  active align-self-center"
              id="pills-centro-tab"
              data-toggle="pill"
              href="#pills-centro"
              role="tab"
              aria-controls="pills-centro"
              aria-selected="true"
            >
              ZONA CENTRO
            </a>
          </li>
          <li className="nav-item align-self-auto hvr-rectangle-out">
            <a
              className="nav-link navlink align-self-center"
              id="pills-norte-tab"
              data-toggle="pill"
              href="#pills-norte"
              role="tab"
              aria-controls="pills-norte"
              aria-selected="false"
            >
              ZONA NORTE
            </a>
          </li>

          <li className="nav-item align-self-auto hvr-rectangle-out">
            <a
              className="nav-link navlink align-self-center"
              id="pills-sur-tab"
              data-toggle="pill"
              href="#pills-sur"
              role="tab"
              aria-controls="pills-sur"
              aria-selected="false"
            >
              ZONA SUR
            </a>
          </li>

          <li className="nav-item hvr-rectangle-out">
            <a
              className="nav-link navlink"
              id="pills-oeste-tab"
              data-toggle="pill"
              href="#pills-oeste"
              role="tab"
              aria-controls="pills-oeste"
              aria-selected="false"
            >
              ZONA OESTE
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
            <div className="container-fluid">
              <div className="row">
                <CardSala />
                <CardSala />
                <CardSala />
                <CardSala />
                <CardSala />
                <CardSala />
                <CardSala />
                <CardSala />
                <CardSala />
                <CardSala />

                <CardSala />
              </div>
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="pills-norte"
            role="tabpanel"
            aria-labelledby="pills-norte-tab"
          >
            <div className="container-fluid">
              <div className="row">
                <CardSala />
                <CardSala />
                <CardSala />
              </div>
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="pills-sur"
            role="tabpanel"
            aria-labelledby="pills-sur-tab"
          >
            <div className="container-fluid">
              <div className="row">
                <CardSala />
                <CardSala />
                <CardSala />
                <CardSala />

                <CardSala />
              </div>
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="pills-oeste"
            role="tabpanel"
            aria-labelledby="pills-oeste-tab"
          >
            <div className="container-fluid">
              <div className="row">
                <CardSala />
                <CardSala />
                <CardSala />
              </div>
            </div>
          </div>
        </div>
        <a
          id="myBtn"
          className="up hvr-float  rounded-circle simplescrollup__button simplescrollup__button--show simplescrollup__button--hide"
          onClick={this.onClickUp}
        >
          <FontAwesomeIcon
            className="botonup"
            style={{
              color: "lawngreen"
            }}
            icon={faChevronCircleUp}
          />
        </a>
      </div>
    );
  }
}
export default Salas;
