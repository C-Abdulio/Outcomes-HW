import React, { Component } from 'react';
import logo from "../resources/Artfinga-Logo-Color.png"
import screenshot from '../resources/ScreenShot.png'

export default class Project4 extends Component{
  render(){
    return(
      <div className = "exhibit">
      <a href="https://murmuring-retreat-20607.herokuapp.com/"><img id="logo" src={ logo } alt="project4-logo"/></a>
        <img src= { screenshot } alt="project4"/>
        <div id = "line"></div>
        <article>
        My Pride and joy. A small drawing app using HTML Canvas powered by React, and held together with Rails backend and tape....lots and lots of tape.
        Click on <a href = "https://github.com/C-Abdulio/GA-Project-4">Here</a> for Git Hub Link
        </article>
      </div>
    )
  }
}
