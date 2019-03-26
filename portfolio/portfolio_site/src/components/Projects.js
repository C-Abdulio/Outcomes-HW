import React, { Component } from 'react';
import title from '../resources/TitleScreen.png';
import screenshot from '../resources/SpiderVerseAPI_Wireframe1.png';
import group from "../resources/groupproject.png";
import logo from "../resources/Artfinga-Logo-Color.png"
import pic from '../resources/ScreenShot.png';

export default class Projects extends Component{
  render(){
    return(
      <div>
      <div className = "exhibit">
        <img src= {title} alt="project1"/>
        <div id = "line"></div>
        <article>
        My first ever project. A Zelda/Blerf clone developed through HTML and Javascript. Still in Development.
        You can play a prototype test <a href = "http://stupendous-bucket.surge.sh/">HERE</a>.
        <a href = "https://github.com/C-Abdulio/GA-Project1REDO-BreakfastWarrior">Click here to go to the Github Link</a>
        </article>
      </div>

      <div className = "exhibit">
        <a href = "http://humorous-ear.surge.sh/"><img src={ screenshot } alt="project2"/></a>
        <div id = "line"></div>
        <article>
        My second Project: A promotional page based on The Marvel Comic even <em>SPIDER-VERSE</em>.
        Uses the official Marvel Comics API in order to list a collection of variations based on <b>Spider-Man</b>
        Click on logo for deployed site. Click on <a href = "https://github.com/C-Abdulio/GA-WDI-Project2">GIT HUB LINK</a> for Git Hub
        </article>
      </div>

      <div className = "exhibit">
      <img src={ group } alt="project3"/>
      <div id = "line"></div>
      <article>
      I basically just did the color scheme and basic concept layout. Everything else it's on the group.
       <a href = "https://github.com/estervojko/event-planner-app/tree/production">GIT HUB LINK</a>
      </article>
      </div>

      <div className = "exhibit">
      <a href="https://murmuring-retreat-20607.herokuapp.com/"><img id="logo" src={ logo } alt="project4-logo"/></a>
        <img src= { pic } alt="project4"/>
        <div id = "line"></div>
        <article>
        My Pride and joy. A small drawing app using HTML Canvas powered by React, and held together with Rails backend and tape....lots and lots of tape.
        Click on <a href = "https://github.com/C-Abdulio/GA-Project-4">Here</a> for Git Hub Link
        </article>
      </div>
      </div>
    )
  }
}
