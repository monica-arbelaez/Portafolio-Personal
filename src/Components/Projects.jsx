import React, { Component } from 'react'
import TributePage from './../images/tribute.png';
import Formulario from './../images/form1.png'
import LandigPage from './../images/LandigPage.png'
import TecDocpage from './../images/tecDocpage.png'
import Pondcast from './../images/Pondcast.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import "jquery";
import "popper.js";
export default class Proyects extends Component {
    render() {
        const { title } = this.props

        return (
            <div>
                <div>
                    <h2 id="projects" className="titulo2" style={{ 'padding': '60px' }}>{title}</h2>
                 </div>
                <div class="container-fluid float-right d-flex flex-wrap">
                    <div class="row row-cols-1 row-cols-md-4">
                        <div className="col-mb-4 col-md-offset-6">
                            <div className="card justify-content-center">
                                <img src={TributePage} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h6 className="card-title">PAGINA TRIBUTO</h6>
                                    <a href="https://monica-arbelaez.github.io/pagina-tributo/" target="_blank" rel="noopener noreferrer" className="btn btn-dark">Ir a la página</a>
                                </div>
                            </div>
                        </div>
                        <div classNameName="col-mb-4 col-md-offset-6">
                            <div className="card justify-content-center">
                                <img src={Formulario} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">FORMULARIO</h5>
                                    <a href="https://monica-arbelaez.github.io/Formulario1/" target="_blank" rel="noopener noreferrer" className="btn btn-dark">Ir a la página</a>
                                </div>
                            </div>
                        </div>
                        <div classNameName="col-mb-4 col-md-offset-6">
                            <div className="card justify-content-center">
                                <img src={LandigPage} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">LANDIG PAGE</h5>
                                    <a href="https://monica-arbelaez.github.io/landingPage/index.html" target="_blank" rel="noopener noreferrer" className="btn btn-dark">Ir a la página</a>
                                </div>
                            </div>
                        </div>
                        <div classNameName="col-mb-4 col-md-offset-6">
                            <div className="card justify-content-center">
                                <img src={TecDocpage} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">DOCUMENTATION PEGE</h5>
                                    <a href="https://monica-arbelaez.github.io/TecDocPage/index.html" target="_blank" rel="noopener noreferrer" className="btn btn-dark">Ir a la página</a>
                                </div>
                            </div>
                        </div>
                        <div classNameName="col-mb-4 col-md-offset-6">
                            <div className="card justify-content-center">
                                <img src={Pondcast} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">LANDING PONCAST</h5>
                                    <a href="https://monica-arbelaez.github.io/landing/" target="_blank" rel="noopener noreferrer" className="btn btn-dark">Ir a la página</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>      
        )   
    }
}
