import React, { Component } from 'react'
import TributePage from './../images/tribute.png';
import Formulario from './../images/form1.png'
import LandigPage from './../images/LandigPage.png'
import TecDocpage from './../images/tecDocpage.png'
import Pondcast from './../images/Pondcast.png'
import Calculadora from './../images/calculadora.png'
import Pokedex from './../images/pokedex.png'
import Quote from './../images/Quote.png'
import Drum from './../images/drum.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Styles/Projects.css";
import "jquery";
import "popper.js";
export default class Proyects extends Component {
    render() {
        const { title } = this.props

        return (
            <div id="proyectos">
                <div>
                    <h2  className="titulo2 text-white" style={{ 'padding': '70px' }}>{title}</h2>
                 </div>
                <div className="container-fluid float-right d-flex flex-wrap">
                    <div className="row row-cols-1 row-cols-md-3">
                       
                        <div classNameName="col-mb-3 col-md-offset-6">
                            <div id='card1'className="card justify-content-center">
                                <img src={Formulario} className="card-img-top"  alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">FORMULARIO</h5>
                                    <a href="https://monica-arbelaez.github.io/Formulario1/" target="_blank" rel="noopener noreferrer" className="btn btn-dark">Ir a la página</a>
                                </div>
                            </div>
                        </div>
                        <div classNameName="col-mb-3 col-md-offset-6">
                            <div id='card1' className="card justify-content-center">
                                <img src={LandigPage} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">LANDIG PAGE</h5>
                                    <a href="https://monica-arbelaez.github.io/landingPage/index.html" target="_blank" rel="noopener noreferrer" className="btn btn-dark">Ir a la página</a>
                                </div>
                            </div>
                        </div>
                        <div classNameName="col-mb-3 col-md-offset-6">
                            <div id='card1' className="card justify-content-center">
                                <img src={TecDocpage} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">DOCUMENTATION PEGE</h5>
                                    <a href="https://monica-arbelaez.github.io/TecDocPage/index.html" target="_blank" rel="noopener noreferrer" className="btn btn-dark">Ir a la página</a>
                                </div>
                            </div>
                        </div>
                        <div classNameName="col-mb-4 col-md-offset-6">
                            <div id='card1' className="card justify-content-center">
                                <img src={Pondcast} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">LANDING PONCAST</h5>
                                    <a href="https://monica-arbelaez.github.io/landing/" target="_blank" rel="noopener noreferrer" className="btn btn-dark">Ir a la página</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-mb-4 col-md-offset-6">
                            <div id='card1' className="card justify-content-center">
                                <img src={TributePage} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">PAGINA TRIBUTO</h5>
                                    <a href="https://monica-arbelaez.github.io/pagina-tributo/" target="_blank" rel="noopener noreferrer" className="btn btn-dark">Ir a la página</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-mb-4 col-md-offset-6">
                            <div id='card1' className="card justify-content-center">
                                <img src={Calculadora} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">CALCULADORA</h5>
                                    <a href="https://calculator-react-wheat.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-dark">Ir a la página</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-mb-4 col-md-offset-6">
                            <div id='card1' className="card justify-content-center">
                                <img src={Pokedex} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">POKEDEX</h5>
                                    <a href="https://pokedex-js-flame.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-dark">Ir a la página</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-mb-4 col-md-offset-6">
                            <div id='card1' className="card justify-content-center">
                                <img src={Quote} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">QUOTE MACHINE</h5>
                                    <a href="https://quote-machine-eight.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-dark">Ir a la página</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-mb-4 col-md-offset-6">
                            <div id='card1' className="card justify-content-center">
                                <img src={Drum} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">DRUM MACHINE</h5>
                                    <a href="https://drum-machine-js.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-dark">Ir a la página</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>      
        )   
    }
}
