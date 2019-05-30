import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
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
      <div className="App">
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  error: state.error,
});

// const mapDispatchToProps = (dispatch) => ({

// })

export default connect(mapStateToProps)(App);
