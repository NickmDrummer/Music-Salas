import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./registro.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Logo from "../../img/Logo.png";
import { Link } from "react-router-dom";
import Facebook from "../../img/facebook.svg";
import Google from "../../img/busqueda.svg";

class Registro extends React.Component {
  render() {
    return (
      <div className="">
        <div className=" container-fluid text-center overflow-hidden">
          <form className="form-signin">
            <div className="text-center mb-4">
              <img
                className="mb-4 rounded"
                src={Logo}
                alt=""
                width="72"
                height="72"
              />
              <h1 className="h3 mb-3 font-weight-normal">
                <b>MUSIC SALAS</b>
              </h1>
              <p>
                Bienvenido a Music Salas. Aquí podrás reservar Salas de Ensayo o
                ser el Administrador de la tuya.
              </p>
            </div>

            <div className="form-label-group">
              {" "}
              <p>¿Eres Administrador de una Sala?</p>
              <div className="custom-control custom-switch">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customSwitch1"
                />

                <label className="custom-control-label" htmlFor="customSwitch1">
                  Si, soy Administrador de una Sala
                </label>
              </div>
              <Link to="/secsalas">
                <button type="button" className="facebook btn btn-light">
                  Iniciar con
                  <img className="logossocial" src={Facebook}></img>
                </button>
              </Link>
              <Link to="secsalas">
                <button type="button" className="btn btn-light">
                  Iniciar con
                  <img className="logossocial" src={Google}></img>
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Registro;
