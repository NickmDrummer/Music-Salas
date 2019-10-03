import React from "react";

import Salas from "../components/salas/salas";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

class SecSalas extends React.Component {
  render() {
    return (
      <div>
        <Navbar />

        <Salas />

        <Footer />
      </div>
    );
  }
}

export default SecSalas;
