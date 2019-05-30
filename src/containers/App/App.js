import React, { Component } from 'react';
import { getCatGif } from '../../utils/fetchCalls/getCatGif';
import { fetchAnything } from '../../utils/fetchCalls/fetchAnything.js';


class App extends Component {  


  componentDidMount() {
    getCatGif()
      .then(result => console.log(result[0].url));

    fetchAnything('https://icanhazdadjoke.com/')
      .then(result => console.log('joke', result));
  }



  render() {
    return (
      <div className="App">

    </div>
  );
}
}

export default App;
