import React from "react";
import image1 from "./images/Happynewyear2019.png";
import image2 from "./images/Diesel.jpg";
import image3 from "./images/Jack.jpg";

export default function Slide(){
  return(
    <div className="slideShow">
      <img src = { image1 } alt= "image1" />
      <img src = { image2 } alt= "image2" />
      <img src = { image3 } alt= "image3" />
    </div>
  )
}
