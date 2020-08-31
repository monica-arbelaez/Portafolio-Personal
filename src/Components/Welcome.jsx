import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "jquery";
import "popper.js";
import './Styles/Welcome.css'
// const ImagenMA = require("../images/monica.png");
// import './Styles/index.css';
export default class Welcome extends Component {
    render() {
        const { ImagenMA, title1, title2, text1 } = this.props
        return (
            
            <div id="welcome" className="container" style={{'padding': '55px'}}>
                <div className="row">
                    
                    <div className="col-md-6 col-md-offset-6 align-self-center align-items-center justify-content-justify text-danger">
                      <h1 className="titulo1">{title1}</h1>
                        <h2 className="titulo1">{title2}</h2>
                        <p className="texto1">{text1}</p>
                    </div>
                    <div className="col-md-6 col-md-offset-6">
                        <img className="img-thumbnail img-fluid" src={ImagenMA} alt=""/>
                    </div>
                </div>
            </div>
            
            

            

            
        )
    }
}
