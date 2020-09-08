import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery";
import "popper.js";
import "./Styles/Welcome.css";
// import ImagenMA from "./../images/monica.png";

export default class Welcome extends Component {
  render() {
    const { ImagenMA, title1, text1 } = this.props;
    return (
      
      <div id="inicio">
      <div id="div-img" >
        <div  className="container" >
          <div className="row">
            <div  className="col-md-6 col-md-offset-6 align-self-center align-items-center justify-content-justify text-black ">
              
              <h3 className="titulo1 text-white" >{title1}</h3>
              <h1 className="texto1 text-white">{text1}</h1>
            </div>
            <div className="col-md-6 col-md-offset-6">
              <img id="imgMA" className="img-thumbnail style={{'maxWidth': '90%', height: 'auto'}} img-fluid" src={ImagenMA} alt="" />
            
            </div>
          </div>
        </div>
      </div>
      </div>
      
    );
  }
}
