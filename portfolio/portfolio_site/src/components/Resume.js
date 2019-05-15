import React from 'react';
// import  resume  from '../resources/Creddle _ Resume__2019.png';

export default function Resume(){
  return(
    <div className="resBlok">
      <form className = "resume">
      <iframe alt="resume" src="https://resume.creddle.io/embed/fvlqgr4nh97"
  width="850" height="1100" seamless></iframe>
         {/*<img src={ resume } alt="resume" />*/}
        <div id="skillBlok">
         <h2>Carlos knows the following fancy doodads</h2>
             <div className="codeBlock">
                <div id="codeThing">
                    <i className="fab fa-react"></i>
                    <p>REACT</p>
                </div>
                <div id="codeThing">
                    <i className="fab fa-js-square"></i>
                    <p>JAVASCRIPT</p>
                </div>
                <div id="codeThing">
                    <i className="fab fa-css3-alt"></i>
                    <p>CSS 3</p>
                </div>
                <div id="codeThing">
                    <i className="fab fa-html5"></i>
                    <p>HTML 5</p>
                </div>
            </div>
            <div className="codeBlock">
               <div id="codeThing">
                   <p>RUBY ON RAILS</p>
               </div>
               <div id="codeThing">
                   <p>EXPRESS</p>
               </div>
               <div id="codeThing">
                   <p>HTML CANVAS</p>
               </div>
           </div>
         </div>
      </form>
    </div>
  )
}
