import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./bodyVerSala.css";
import InputFecha from "../inputFecha/inputfecha";
import InputHora from "../inputHora/inputHora";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faClock,
  faDollarSign,
  faGuitar,
  faMicrophoneAlt
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class BodyVerSala extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row bodyVersala">
            <div className="descripcionSala col-md-8 col-lg-8">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <h6 className="titles">SERVICIOS</h6>
                  <FontAwesomeIcon className="iconodatos" icon={faDollarSign} />
                  Precio/Hora: $200
                  <br />
                  <FontAwesomeIcon
                    className="iconodatos"
                    icon={faMicrophoneAlt}
                  />
                  Precio/Hora de Estudio: $400
                  <br />
                  <FontAwesomeIcon className="iconodatos" icon={faGuitar} />
                  Alquiler de Intrumentos $70
                  <hr className="lineaDivServ" />
                </div>
                <div className="col-lg-6 col-md-6">
                  <h6 className="titles">DATOS DE LA SALA</h6>
                  <FontAwesomeIcon
                    className="iconodatos"
                    icon={faMapMarkerAlt}
                  />{" "}
                  9 de Julio 2550, Rosario.
                  <br />
                  <FontAwesomeIcon className="iconodatos" icon={faPhoneAlt} />
                  0341 337-8500
                  <br />
                  <FontAwesomeIcon className="iconodatos" icon={faClock} />
                  Lunes a Sábados de 10 a 24hs. Domingos de 16 a 24hs.
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4  text-center">
              <h6 className="titles">PEDIR RESERVA</h6>
              <InputFecha />
              <InputHora />
              <Link to="#" className="btnsr btn btn-block" role="button">
                Solicitar Reserva
              </Link>
              {/* MODAL MESSAGE START-------------------------------------------------------------- */}
              <button
                type="button"
                class="btn btnmensaje btn-block btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
                data-whatever="@mdo"
              >
                Enviar Mensaje
              </button>

              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-body">
                      <form>
                        <div class="form-group">
                          <label for="message-text" class="col-form-label">
                            Mensaje:
                          </label>
                          <textarea
                            class="form-control"
                            id="message-text"
                          ></textarea>
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Cerrar
                      </button>
                      <button
                        type="button"
                        class="btn btnmensajemodal btn-primary"
                      >
                        Enviar Mensaje
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* MODAL MESSAGE START-------------------------------------------------------------- */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BodyVerSala;
