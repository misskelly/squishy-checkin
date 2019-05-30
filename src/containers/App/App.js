import React, { Component } from './node_modules/react';
import logo from './logo.svg';
import './App.css';
import { getCatGif } from '../../utils/fetchCalls/getCatGif';


class App extends Component {  


  componentDidMount() {
    getCatGif()
      .then(result => console.log(result[0].url)) 
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a>
      </header>
    </div>
  );
}
}

export default App;
