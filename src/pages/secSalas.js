import React from "react";

import Salas from "../components/salas";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

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
