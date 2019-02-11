import React, { Component } from 'react';
import title from '../resources/TitleScreen.png'

export default class Project1 extends Component{
  render(){
    return(
      <div className = "exhibit">
        <img src= {title} alt="project1"/>
        <div id = "line"></div>
        <article>
        My first ever project. A Zelda/Blerf clone developed through HTML and Javascript. Still in Development.
        You can play a prototype test <a href = "http://stupendous-bucket.surge.sh/">HERE</a>.
        <a href = "https://github.com/C-Abdulio/GA-Project1REDO-BreakfastWarrior">Click here to go to the Github Link</a>
        </article>
      </div>
    )
  }
}
