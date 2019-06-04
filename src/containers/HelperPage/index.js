import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHelpers } from '../../thunks/getHelpers';
import kitty from '../../assets/kitty.png';
import next from '../../assets/next.png';
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
    // console.log(this.props);
    // console.log(this.state);
  }

  render() {
    const { cat, joke } = this.props;
    const { currentView } = this.state;
    const linkText = currentView === 'cats' ? 'ok done with the cuteness' : "I can't take anymore of this";
    const refreshBtnText = currentView === 'cats' ? 'another cat gif plz' : 'lol ok hit me again';
    const refreshIcon = currentView === 'cats' ? kitty : next;

    return (
      <section className="helper-section">
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
                <img src={ jokeGuy } alt="little icon about to tell a terrible joke" className="joke-guy" />
                <h4 className="joke-text">
                { joke }
                </h4>
              </div>
          )

        }
          <button
            type="button"
            className="new-helper-btn"
            onClick={() => window.location.reload()}
          >
            { refreshBtnText }
            <img src={ refreshIcon } alt="" className="btn-icon" />
          </button>

          <NavLink
            className="home-link"
            to="/"
          >
            <button
              type="button"
              className="home-btn"
            >
              { linkText }
            </button>
          </NavLink>
        </article>
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

HelperPage.propTypes = {
  cat: PropTypes.string,
  joke: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(HelperPage);
