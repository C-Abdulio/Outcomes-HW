import React, { Component } from 'react';


export default class NavBar extends Component{
  render(props){
    return(
      <div className = "Nav">
        <nav>
          <div onClick = {() => this.props.changeProj('resume')}>
            <h4>HOME</h4>
          </div>

          <div onClick = {() => this.props.changeProj('game')}>
            <h4>PROJECT 1</h4>
          </div>

          <div onClick = {() => this.props.changeProj('react')}>
            <h4>PROJECT 2</h4>
          </div>

          <div onClick = {() => this.props.changeProj('group')}>
            <h4>PROJECT 3</h4>
          </div>

          <div onClick = {() => this.props.changeProj('artfinga')}>
            <h4>PROJECT 4</h4>
          </div>

          <div onClick = {() => this.props.changeProj('gallery')}>
            <h4>ILLUSTRATIONS</h4>
          </div>

        </nav>
      </div>
    )
  }
}
