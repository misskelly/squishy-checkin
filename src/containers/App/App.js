/* eslint-disable react/jsx-curly-spacing */
/* eslint-disable jsx-quotes */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import ErrorPage from '../../components/ErrorPage';
import Home from '../../components/Home';
import HelperPage from '../HelperPage';
import { getHelpers } from '../../thunks/getHelpers';


export class App extends Component {
  
  componentDidMount() {
    this.props.getHelpers();
    console.log('app props: ', this.props);
    console.log('app state: ', this.state);
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

export const mapStateToProps = state => ({
  isLoading: state.isLoading,
  error: state.error
});

export const mapDispatchToProps = (dispatch) => ({
  getHelpers: () => dispatch(getHelpers())
});

// App.propTypes = {

// }

export default connect(mapStateToProps, mapDispatchToProps)(App);
