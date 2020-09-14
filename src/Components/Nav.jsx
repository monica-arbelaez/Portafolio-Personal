import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "jquery";
import "popper.js";
import './Styles/Nav.css'

class Nav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          menu: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
      }
    
      toggleMenu(){
        this.setState({ menu: !this.state.menu })
      }

    render() {

        const show = (this.state.menu) ? "show" : "" ;

        return (


            <div>
                <header className="header">
                    <div className="container-{breakpoint} fixed-top justify-content-center">
                        <nav id='nav1' className="navbar navbar-inverse navbar-static-top  navbar-expand-lg navbar-light justify-content-between text-responsive ">
                                    <a id= "name" className="navbar-brand" href="#">
                                        <h2 id= "name" className="nombre text-responsive">Mónica</h2>
                                        </a>
                            <button id='bt' className="navbar-toggler bg-white" type="button" onClick={this.toggleMenu}>
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className={"collapse navbar-collapse justify-content-end " + show}>
                                <div id="textlink" className="navbar-nav  ">
                                    <a id="linksito" className="nav-item nav-link active " href="#inicio">INICIO</a>
                                    <a id="linksito" className="nav-item nav-link " href="#quien-soy">QUIEN SOY</a>
                                    <a id="linksito" className="nav-item nav-link " href="#proyectos">PROYECTOS</a>
                                    <a id="linksito" className="nav-item nav-link " href="#contacto">CONTACTO</a>
                                </div>
                            </div>

                        </nav>
                    </div>
                </header>
            </div>

        )
    }

}

export default Nav
