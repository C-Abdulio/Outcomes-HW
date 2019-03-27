import React from "react";
import ReactDOM from 'react-dom';
import Resume from './Resume.js'

const JSX_MODAL =  (
  <div className = "dimmer">
    <div className = "visible">
    THIS IS SOME TEXT IN A MODAL
    {<Resume />}
    </div>
  </div>
)

export default function Modal(props){
  return ReactDOM.createPortal(JSX_MODAL, document.querySelector("#modal"));
}
