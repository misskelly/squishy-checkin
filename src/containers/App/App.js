/* eslint-disable react/jsx-curly-spacing */
/* eslint-disable jsx-quotes */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import ErrorPage from '../../components/ErrorPage';
import Home from '../../components/Home'
import HelperPage from '../HelperPage';
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
      <div className='App'>
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/cats' component={ HelperPage } />
        <Route path='/jokes' component={ HelperPage } />
        <Route path='/everythingisawful' component={ HelperPage } />
        <Route path='/error' component={ ErrorPage } /> 
      </Switch>
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

// App.propTypes = {

// }

export default connect(mapStateToProps)(App);
