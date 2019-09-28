import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../styles CSS/footer.css";
import Logo from "../img/Logo.png";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer className="footer mt-auto py-3">
          <div className="container">
            <div className="row">
              <div className="col-12 align-self-center text-center">
                <img
                  src={Logo}
                  className="logofooter d-inline-block align-top"
                  alt=""
                />
                <h4>
                  <b>MUSIC SALAS</b>
                </h4>
                <a className="hvr-pulse" href="#">
                  {"Preguntas Frecuentes?"}
                </a>
              </div>
              <div
                className="col-12 compartir align-self-center text-center
          "
              >
                <h4>Compartir</h4>
                <div className="iconos">
                  <a className="hvr-pulse-shrink" href="#">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                  <a className="hvr-pulse-shrink" href="#">
                    <ion-icon name="logo-whatsapp"></ion-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
