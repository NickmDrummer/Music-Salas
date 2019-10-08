import React from "react";
import Navbar from "../../components/navbar/navbar";
import BodyPregFrec from "../../components/bodyPregFrec/bodyPregFrec";
import Footer from "../../components/footer/footer";

class PregFrecuentes extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <BodyPregFrec />
        <Footer />
      </div>
    );
  }
}

export default PregFrecuentes;
