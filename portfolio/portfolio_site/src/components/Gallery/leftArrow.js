import React from "react";

export default function Left(props){
  return(
    <div className="leftBtn" onClick={props.prevSlide}>
      <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
    </div>
  )
}
