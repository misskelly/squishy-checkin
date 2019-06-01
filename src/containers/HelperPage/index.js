import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHelpers } from '../../thunks/getHelpers';

export class HelperPage extends Component {
  
  componentDidMount() {
    // console.log(this.props);
    // console.log(this.state);
  }
  
  render() {
    const path = this.props.match.path;
    return (
      <section className='helper-section'>
        {path === '/cats' && 
        <>
        <h3>Here are some cats.</h3>
        <img src={this.props.cat}/>
        </>
        }
        {path === '/jokes' && 
        <h4>{this.props.joke}</h4>
        }

      </section>
    )
  }
}

const mapStateToProps = state => ({
  cat: state.cat,
  joke: state.joke,
  isLoading: state.isLoading,
  hasErrored: state.hasErrored
})

const mapDispatchToProps = {
  getHelpers: () => dispatchEvent(getHelpers())
}



export default connect(mapStateToProps, mapDispatchToProps)(HelperPage);
