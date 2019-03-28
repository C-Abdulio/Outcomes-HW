import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import Landing  from '../LandingPage/Landing.js';


export default class NavBar extends Component{
  render(props){
    return(
      <div className = "Nav">
      <NavLink to='/'>
      <p>HOME</p>
      </NavLink>

      <NavLink to='/projects'>
      <p>PROJECTS</p>
      </NavLink>

        <NavLink to='/gallery'>
        <p>ILLUSTRATIONS</p>
        </NavLink>
        
      </div>
    )
  }
}
