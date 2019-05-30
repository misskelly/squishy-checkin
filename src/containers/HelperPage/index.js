import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCatGif } from '../../utils/fetchCalls/fetchCatGif';

export class HelperPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentView: '',
    }
  }

  // componentDidMount ()

  
  render() {
    return (
      <section className='helper-section'>
        <h3>Here are some cats.</h3>
        {/* <img src='' */}
      </section>
    )
  }
}

const mapStateToProps = state => ({
  cat: state.cat
})

// const mapDispatchToProps = {
  
// }

export default connect(mapStateToProps)(HelperPage)
