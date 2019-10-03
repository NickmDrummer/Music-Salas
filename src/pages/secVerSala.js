import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import VerSala from "../components/verSala/verSala";

class SecVerSala extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <VerSala />

        <Footer />
      </div>
    );
  }
}

export default SecVerSala;
