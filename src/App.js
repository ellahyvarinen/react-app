import React, { Component } from 'react';
import logo from './kanye.png';
import './App.css';


class App extends Component {

  constructor() {
    super();
    this.state = {
      quote: '',
    };
  }

  componentDidMount () {
    fetch('https://api.kanye.rest/')
    .then( response => response.json() )
    .then( data => 
      this.setState({
        quote: data,
      })
    )
    .catch( error => { console.error(error); })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Kanye Rest West React</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.quote.quote}
          </p>

        </header>
        <footer className="App-footer">
          <p>Inspired by <a href="https://kanye.rest/">kanye.rest</a></p>
        </footer>
      </div>
    );
  }
}

export default App;
