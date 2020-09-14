import React from 'react';
import './App.css';
import Nav from './Components/Nav'
import Welcome from './Components/Welcome'
import QuienSoy from './Components/QuienSoy'
import Projects from './Components/Projects'
import Footer from './Components/Footer'



function App() {
  return (
    <div className="App">
      <Nav/>
      <Welcome 
      ImagenMA= {require('./images/monica.png')}
      title1='Hola soy Mónica.'
      text1='Desarrolladora FrontEnd.'
      />
      <QuienSoy title2= 'QUIEN SOY'
      text2= 'Soy artista plástica Antioqueña, ilustradora y fotógrafa, apasiona por los retos y la tecnología. Tengo habilidades en desarrollo FrontEnd con tecnologías como CSS, HTML, JavaScript, Bootstrap y React... Esto me ha permitido combinar el arte con la tecnología, posibilitándome otras formas de emplear la creatividad, transmitiendo nuevas ideas, creando obras de arte de otras formas.Mi estudio en artes plásticas y mi experiencia laboral comunitaria me han posibilitado adquirir una gran variedad de herramientas y habilidades blandas, capacidad para el trabajo en equipo y a la vez un buen desempeño para hablar en público. '
      />
      <Projects
      title= 'PROYECTOS'
      />
      <Footer/>
    </div>
  );
}

export default App;
