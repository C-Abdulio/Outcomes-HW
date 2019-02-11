import React from "react";

export default function Right(props){
  return(
    <div className="rightBtn" onClick = {props.nextSlide}>
      <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
    </div>
  )
}
