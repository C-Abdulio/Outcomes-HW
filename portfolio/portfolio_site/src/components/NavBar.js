import React, { Component } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import Landing  from '../LandingPage/Landing.js';


export default class NavBar extends Component{
  render(props){
    return(
      <div className = "Nav">
        <nav>
          <div onClick = {() => this.props.changeProj('resume')}>
            <h4>HOME</h4>
          </div>

          <div onClick = {() => this.props.changeProj('project')}>
            <h4>PROJECTS</h4>
          </div>

          <div onClick = {() => this.props.changeProj('gallery')}>
            <h4>ILLUSTRATIONS</h4>
          </div>
        </nav>
      </div>
    )
  }
}
