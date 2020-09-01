import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery";
import "popper.js";
import "./Styles/Welcome.css";
// import ImagenMA from "./../images/monica.png";

export default class Welcome extends Component {
  render() {
    const { ImagenMA, title2,  } = this.props;
    return (
      
      <div>
      <div id="div-img" >
        <div  className="container" style={{ padding: "55px" }}>
          <div className="row">
            <div id="welcome" className="col-md-6 col-md-offset-6 align-self-center align-items-center justify-content-justify text-black ">
              
              <h2 className="titulo1">{title2}</h2>
              {/* <h5 className="texto1">{text1}</h5> */}
            </div>
            <div className="col-md-6 col-md-offset-6">
              <img id="imgMA" className="img-thumbnail img-fluid" src={ImagenMA} alt="" />
            </div>
          </div>
        </div>
      </div>
      </div>
      
    );
  }
}
