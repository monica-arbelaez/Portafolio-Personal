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
                        <nav
                            className="navbar navbar-inverse navbar-static-top navbar-expand-lg navbar-light bg-info justify-content-between text-responsive ">

                            <button className="navbar-toggler" type="button" onClick={this.toggleMenu}>
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className={"collapse navbar-collapse justify-content-end " + show}>
                                <div id="textlink" className="navbar-nav bg-info ">
                                    <a id="linksito" className="nav-item nav-link active " href="#welcome">WELCOME</a>
                                    <a id="linksito" className="nav-item nav-link " href="#projects">PROJECTS</a>
                                    <a id="linksito" className="nav-item nav-link " href="#contact">CONTACT</a>
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