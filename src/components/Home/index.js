import React from 'react';
import { NavLink } from 'react-router-dom';


const Home = () => {
  return (
    <main>
      <h1 className='home-heading'>
        What would help you feel better?
      </h1>
      <NavLink to={'/jokes'}>
        <button className='jokes-nav-btn'>
          I could use a laugh
        </button>
      </NavLink>
      <NavLink to={'/cats'}>
        <button className='cats-nav-btn'>
          Perhaps some cuteness
        </button>
      </NavLink>
      <NavLink to={'/everythingisawful'}>
        <button 
          type='button'
          className='crisis-nav-btn'>
          Everything is awful and I'm not ok.
        </button>
      </NavLink>
      
    </main>
  );
};

export default Home;
