import React, { Component } from "react";
import image1 from "../resources/Happynewyear2019.png";
import image2 from "../resources/TitleScreen.png";
import image3 from "../resources/Jack.jpg";

export default class Gallery extends Component{
  render(){
    return(
      <div className="galleryCont">
        <div className="slideShow">
          <img src = { image1 } alt= "image1" />
          <img src = { image2 } alt= "image2" />
          <img src = { image3 } alt= "image3" />
        </div>
      </div>
    )
  }
}
