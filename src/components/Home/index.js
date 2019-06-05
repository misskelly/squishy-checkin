/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { NavLink } from 'react-router-dom';


const Home = () => {
  return (
    <main>
      <header className="header">
        <h1 className="main-heading">
          <span role="img">♥</span>
          Squishy
          <span className="check-in">Check-In</span>
        </h1>
        <h2 className="home-heading">
        How are your
          <span className="feelings-text">
          feelings?
          </span>
        </h2>
      </header>
      <section className="links-section">
        <div className="links-wrapper">

          <NavLink to="/jokes">
            <button
              type="button"
              className="jokes-nav-btn btn"
            >
              I could use a laugh
            </button>
          </NavLink>
          <NavLink to="/cats">
            <button
              type="button"
              className="cats-nav-btn btn"
            >
          Need some cuteness rn
            </button>
          </NavLink>
          <NavLink to="/notok">
            <button
              type="button"
              className="crisis-nav-btn btn"
            >
          Everything is awful and I'm not ok
            </button>
          </NavLink>
        </div>
      </section>

    </main>
  );
};

export default Home;
