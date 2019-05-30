import React, { Component } from 'react';
import { fetchCatGif } from '../../utils/fetchCalls/fetchCatGif';
import { fetchDadJoke } from '../../utils/fetchCalls/fetchDadJoke';


class App extends Component {
  componentDidMount() {
    fetchDadJoke()
      .then(result => console.log(result));
    fetchCatGif()
      .then(result => console.log(result));
  }

  render() {
    return (
      <div className="App" />
    );
  }
}

export default App;
