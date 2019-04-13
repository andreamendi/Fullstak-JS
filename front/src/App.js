import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state= {
      name: '',
      lastName: ''
    }
  }

  // Se activa cuando se pinta en el DOM, es un momento del ciclo de vida del componente, es default cuando se activa.
  //Aquí estamos haciendo la petición a nuestra api. Mediante Fetch
  componentDidMount(){
    const url = 'http://localhost:8000/api'

    fetch(`${url}/info`)
      .then(response =>{
        return response.json();
      })
      .then((response) => {
        // console.log(response);
        this.setState({
          name: response[0].nombre,
          lastName: response[0].apellido

        });
      })
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            ¡Hola!
          </p>
          <h2>Mi nombre es: {this.state.name}</h2>
          <h3>y mi apellido es: {this.state.lastName}</h3>
          <p>EL nombre y el apellido los traemos desde mi api</p>
              
          
        </header>
      </div>
    );
  }
}

export default App;
