import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles CSS/registro.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Logo from "../img/Logo.png";
import { Link } from "react-router-dom";

class Registro extends React.Component {
  render() {
    return (
      <div className="cuerpo container-fluid text-center">
        <form className="form-signin">
          <div className="text-center mb-4">
            <img className="mb-4" src={Logo} alt="" width="72" height="72" />
            <h1 className="h3 mb-3 font-weight-normal">
              <b>MUSIC SALAS</b>
            </h1>
            <p>
              Bienvenido a Music Salas. Aquí podrás reservar Salas de Ensayo ó
              ser el Administrador de la tuya.
            </p>
          </div>

          <div className="form-label-group">
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email address"
              required
              autoFocus
            />
            <label htmlFor="inputEmail">Email</label>
          </div>

          <div className="form-label-group">
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              required
            />
            <label htmlFor="inputPassword">Contraseña</label>
          </div>
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
            <button
              className="btn btnregistro btn-lg btn-primary btn-block"
              type="submit"
            >
              Registrarme
            </button>
          </Link>

          <Link to="/login">Ya tengo una cuenta. Iniciar Sesión</Link>
        </form>
      </div>
    );
  }
}

export default Registro;
