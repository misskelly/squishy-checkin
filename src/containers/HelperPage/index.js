/* eslint-disable react/require-default-props */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ErrorPage from '../../components/ErrorPage';
import arrow from '../../assets/arrow.svg';
import jokeGuy from '../../assets/joke.png';


export class HelperPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: '',
    };
  }


  componentDidMount() {
    this.setState({
      currentView: this.props.match.path.slice(1),
    });
  }

  render() {
    const { cat, joke, error } = this.props;
    const { currentView } = this.state;
    const linkText = currentView === 'cats' ? 'ok done with the cuteness' : "I can't take any more of this";
    const refreshBtnText = currentView === 'cats' ? 'another cat gif plz' : 'lol ok hit me again';
  
    return (
      <section className="helper-section">
        {error && <ErrorPage />}
        <article className="helper-wrapper">

          {currentView === 'cats'
        && (
          <>
            <h3 className="cat-heading">Here are some cats.</h3>
            <img src={cat} alt="A silly cat video" />
          </>
        )
      }
          { currentView === 'jokes'
          && (
            <div className="joke-wrapper">
              <img src={jokeGuy} alt="little icon about to tell a terrible joke" className="joke-guy" />
              <h4 className="joke-text">
                { joke }
              </h4>
            </div>
          )

        }
          <div className="btn-wrapper">
            <NavLink
              className="home-link"
              to="/"
            >
              <button
                type="button"
                className="home-btn"
              >
                <img src={arrow} alt="" className="btn-icon home-icon" />
              </button>
              <p className="home-txt">{ linkText }</p>
            </NavLink>
            <NavLink
              className="refresh-helper"
              to={`/${currentView}`}
            >
              <p className="refresh-txt">{ refreshBtnText }</p>
              <button
                type="button"
                className="refresh-btn"
                onClick={() => window.location.reload()}
              >
                <img src={arrow} alt="" className="btn-icon refresh-icon" />
              </button>
            </NavLink>
          </div>
        </article>
      </section>
    );
  }
}

export const mapStateToProps = state => ({
  cat: state.cat,
  joke: state.joke,
  error: state.hasErrored,
});


HelperPage.propTypes = {
  error: PropTypes.string,
  cat: PropTypes.string,
  joke: PropTypes.string,
};

export default connect(mapStateToProps)(HelperPage);
