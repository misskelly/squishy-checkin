/* eslint-disable react/jsx-curly-spacing */
/* eslint-disable jsx-quotes */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import ErrorPage from '../../components/ErrorPage';
import Home from '../../components/Home';
import Helper from '../HelperPage';
import NotOk from '../../components/NotOkPage';
import { getHelpers } from '../../thunks/getHelpers';


export class App extends Component {
  componentDidMount() {
    const { getHelpers } = this.props;
    getHelpers();
  }

  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/cats' component={ Helper } />
          <Route path='/jokes' component={ Helper } />
          <Route path='/notok' component={ NotOk } />
          <Route path='/error' component={ ErrorPage } />
        </Switch>
      </div>
    );
  }
}


export const mapDispatchToProps = dispatch => ({
  getHelpers: () => dispatch(getHelpers()),
});

App.propTypes = {
  getHelpers: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(App);
