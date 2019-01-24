import React, { Component } from 'react';
import screenshot from '../resources/SpiderVerseAPI_Wireframe1.png'

export default class Project2 extends Component{
  render(){
    return(
      <div className = "exhibit">
        <a href = "http://humorous-ear.surge.sh/"><img src={ screenshot } alt="project2"/></a>
        <div id = "line"></div>
        <article>
        My second Project: A promotional page based on The Marvel Comic even <em>SPIDER-VERSE</em>.
        Uses the official Marvel Comics API in order to list a collection of variations based on <b>Spider-Man</b>
        Click on logo for deployed site. Click on <a href = "https://github.com/C-Abdulio/GA-WDI-Project2">GIT HUB LINK</a> for Git Hub
        </article>
      </div>
    )
  }
}
