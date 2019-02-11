import React, { Component } from "react";
import Slide from "./slide";
import Left from "./leftArrow";
import Right from "./rightArrow";
// import image1 from "../resources/Happynewyear2019.png";
// import image2 from "../resources/TitleScreen.png";
// import image3 from "../resources/Jack.jpg";

export default class Slider extends Component{
  constructor(props){
    super(props);

    this.state = {

    }
  }

  prevSlide(){

  }

  nextSlide(){

  }

  render(){
    return(
      <div className="galleryCont">
        <Slide />
        <Left prevSlide = {this.prevSlide}/>
        <Right nextSlide = {this.nextSlide}/>
      </div>
    )
  }
}
