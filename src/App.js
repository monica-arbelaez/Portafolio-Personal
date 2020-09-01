import React from 'react';
import './App.css';
import Nav from './Components/Nav'
import Welcome from './Components/Welcome'
import Projects from './Components/Projects'



function App() {
  return (
    <div className="App">
      <Nav/>
      <Welcome 
      ImagenMA= {require('./images/monica.png')}
      title2='Front-end Developer.'
      // text1='Developer en formación.' 
      // Soy artista plástica Antioqueña, ilustradora y fotógrafa, apasiona por los retos y
      // la tecnología.'
      />
      <Projects
      title= 'PROJECTS'
      />
    </div>
  );
}

export default App;
