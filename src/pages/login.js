import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles CSS/login.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Logo from "../img/Logo.png";

class Login extends React.Component {
  render() {
    return (
      <div class="cuerpo container-fluid text-center">
        <form class="form-signin">
          <div class="text-center mb-4">
            <img class="mb-4" src={Logo} alt="" width="72" height="72" />
            <h1 class="h3 mb-3 font-weight-normal">
              <b>MUSIC SALAS</b>
            </h1>
            <p>Bienvenido a Music Salas.</p>
          </div>

          <div class="form-label-group">
            <input
              type="email"
              id="inputEmail"
              class="form-control"
              placeholder="Email address"
              required
              autofocus
            />
            <label for="inputEmail">Email</label>
          </div>

          <div class="form-label-group">
            <input
              type="password"
              id="inputPassword"
              class="form-control"
              placeholder="Password"
              required
            />
            <label for="inputPassword">Contraseña</label>
          </div>

          <button
            class="btn btnregistro btn-lg btn-primary btn-block"
            type="submit"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
