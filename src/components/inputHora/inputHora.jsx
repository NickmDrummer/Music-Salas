import React, { Component } from "react";
import { Slider } from "primereact/slider";
import "./inputHora.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
export class InputHora extends Component {
  constructor() {
    super();
    this.state = {
      val1: null,
      val2: 50,
      val3: null,
      val4: null,
      rangeValues: [9, 15]
    };
    this.onChangeSlider1 = this.onChangeSlider1.bind(this);
    this.onChangeSlider2 = this.onChangeSlider2.bind(this);
    this.onChangeSlider3 = this.onChangeSlider3.bind(this);
    this.onChangeSlider4 = this.onChangeSlider4.bind(this);
    this.onChangeRangeSlider = this.onChangeRangeSlider.bind(this);
  }

  onChangeSlider1(e) {
    this.setState({ val1: e.value });
  }

  onChangeSlider2(e) {
    var newValue;
    if (e.target && e.target.nodeName === "INPUT") {
      newValue = e.target.value;
    } else {
      newValue = e.value;
    }

    this.setState({ val2: newValue });
  }

  onChangeSlider3(e) {
    this.setState({ val3: e.value });
  }

  onChangeSlider4(e) {
    this.setState({ val4: e.value });
  }

  onChangeRangeSlider(e) {
    this.setState({ rangeValues: e.value });
  }

  render() {
    return (
      <div>
        <div className="p-grid p-fluid">
          <div className=" input">
            <h6 className="tituloinput">
              Rango Horario: {this.state.rangeValues[0]} -{" "}
              {this.state.rangeValues[1]} Hs.
            </h6>
            <Slider
              className="sliderHora"
              value={this.state.rangeValues}
              onChange={this.onChangeRangeSlider}
              range={true}
              style={{ width: "100%" }}
              max={24}
              step={1}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default InputHora;
