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
    const { match, cat, joke } = this.props;
    return (
      <section className="helper-section">
        {match.path === '/cats'
        && (
        <>
          <h3>Here are some cats.</h3>
          <img src={cat} alt='A silly cat video'/>
        </>
        )
        }
        {match.path === '/jokes'
        && <h4>{joke}</h4>
        }

      </section>
    );
  }
}

const mapStateToProps = state => ({
  cat: state.cat,
  joke: state.joke,
  isLoading: state.isLoading,
  hasErrored: state.hasErrored,
});

const mapDispatchToProps = {
  getHelpers: () => dispatchEvent(getHelpers()),
};


export default connect(mapStateToProps, mapDispatchToProps)(HelperPage);
