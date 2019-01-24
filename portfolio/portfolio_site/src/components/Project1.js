import React, { Component } from 'react';
import title from '../resources/TitleScreen.png'

export default class Project1 extends Component{
  render(){
    return(
      <div className = "exhibit">
        <img src= {title} alt="project1"/>
        <div id = "line"></div>
        <article>
        My first ever project. A Zelda/Blerf clone developed through HTML and Javascript. Still in Development
         <a href = "https://github.com/C-Abdulio/GA-Project1REDO-BreakfastWarrior">GIT HUB LINK</a>
        </article>
      </div>
    )
  }
}
