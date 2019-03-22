import React, { Component }  from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


export default class Landing extends Component{
  render(){
    const NewRoute = () => {
      return(
       <div>
        <p>New Route</p>
       </div>
      )
    }
    return(
      <BrowserRouter>
        <div>
        <Route path="/new" component={ NewRoute }/>
        </div>
      </BrowserRouter>
    )
  }
}
