import React, { Component } from 'react'
import "./Styles/QuienSoy.css";

export default class QuienSoy extends Component {
    render() {
        const{title2, text2} = this.props
        return (
            <div>
                 <div id="quien-soy" className= "container text-align-center justify-content-justify align-content-center flex-wrap"
                    style={{ 'padding': '60px' }}>
                    <h1 style={{ 'textAlign': 'center' }}>{title2}</h1>
                    <br />
                    <p className="texto2">{text2}</p>
                </div> 
            </div>
        )
    }
}
