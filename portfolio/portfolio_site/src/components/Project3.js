import React, { Component } from 'react';
import group from "../resources/groupproject.png";
export default class Project3 extends Component{
  render(){
    return(
      <div className = "exhibit">
      <img src={ group} alt="project3"/>
      <div id = "line"></div>
      <article>
      I basically just did the color scheme and basic concept layout. Everything else it's on the group.
       <a href = "https://github.com/estervojko/event-planner-app/tree/production">GIT HUB LINK</a>
      </article>
      </div>
    )
  }
}
