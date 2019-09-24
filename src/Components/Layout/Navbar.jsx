import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../Styles/Navbar.css';

import Blank from '../../Assets/Blank.png';
import Landing from '../../Assets/Landing.png';
import Projects from '../../Assets/Projects.png';
import About from '../../Assets/About.png';

export const Navbar = () => (
  <>
    <nav className='navbar navbar-light bg-light'>
      <div className='container'>
        <NavLink
          className='navbar-brand'
          exact
          to='/'
          style={{ fontWeight: 'lighter' }}
          activeStyle={{ fontWeight: 'bold' }}
        >
          <img
            src={Landing}
            width='30'
            height='30'
            className='d-inline-block align-top'
            alt={Blank}
          />
          Landing
        </NavLink>
        <NavLink
          className='navbar-brand'
          to='/projects'
          style={{ fontWeight: 'lighter' }}
          activeStyle={{ fontWeight: 'bold' }}
        >
          <img
            src={Projects}
            width='30'
            height='30'
            className='d-inline-block align-top'
            alt={Blank}
          />
          Projects
        </NavLink>
        <NavLink
          className='navbar-brand'
          to='/about'
          style={{ fontWeight: 'lighter' }}
          activeStyle={{ fontWeight: 'bold' }}
        >
          <img
            src={About}
            width='30'
            height='30'
            className='d-inline-block align-top'
            alt={Blank}
          />
          About
        </NavLink>
      </div>
    </nav>
  </>
);
