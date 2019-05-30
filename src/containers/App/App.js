import React, { Component } from 'react';
import { fetchCatGif } from '../../utils/fetchCalls/fetchCatGif';
import { fetchDadJoke } from '../../utils/fetchCalls/fetchDadJoke.js';


class App extends Component {  


  componentDidMount() {
    fetchCatGif()
      .then(result => console.log(result[0].url));

    fetchDadJoke('https://icanhazdadjoke.com/')
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
