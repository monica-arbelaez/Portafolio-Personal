import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/Footer.css";
import imgIn from "../images/Linkedin.png";
import imgGitHub from "../images/github.png";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer id="contacto">
          <div className="container">
            <div>
              <div id="title" style={{ marginTop: "150px" }}>
                <h1>TRABAJEMOS JUNTOS</h1>
              </div>
              <div className="Footer-text"style={{ marginTop: "100px" }}>

              <h4>moniarbe233@gmail.com</h4>
                <h3>Mónica Arbeláez López  | Medellín-Colombia</h3>
   
                
              </div>
              <section>
                <div className="footer__icons">
                  <a href="https://github.com/monica-arbelaez" target="_blank">
                    <img
                      src={imgGitHub}
                      alt=""
                      style={{ width: "70px", marginTop: "10px" }}
                    />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/monica-arbelaez1"
                    target="_blank"
                  >
                    <img
                      src={imgIn}
                      alt=""
                      style={{
                        width: "50px",
                        marginTop: "10px",
                        marginLeft: "30px",
                      }}
                    />
                  </a>
                </div>
              </section>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
