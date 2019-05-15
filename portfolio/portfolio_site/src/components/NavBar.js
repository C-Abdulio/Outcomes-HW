import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import Landing  from '../LandingPage/Landing.js';


export default class NavBar extends Component{
  render(props){
    return(
      <div className = "Nav">
      <NavLink to='/'>
      <h2>HOME</h2>
      </NavLink>

      <NavLink to='/projects'>
      <h2>PROJECTS</h2>
      </NavLink>

        <NavLink to='/gallery'>
        <h2>ILLUSTRATIONS</h2>
        </NavLink>

      </div>
    )
  }
}
