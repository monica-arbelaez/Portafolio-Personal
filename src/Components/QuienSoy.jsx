import React, { Component } from "react";
import "./Styles/QuienSoy.css";

export default class QuienSoy extends Component {
  render() {
    const { title2, text2 } = this.props;
    return (
      <div id="quien-soy" >
        <div >
          <h1 style={{ textAlign: "center" }}>{title2}</h1>
          <br />
          <p className="texto2">{text2}</p>
        </div>
      </div>
    );
  }
}
