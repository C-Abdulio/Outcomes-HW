import React from 'react';

export default function Footer(){
  return(
    <div className = "footer">
      <p>All of these projects and artwork are belongs to Me.<span id="one">Me!</span><span id= "two">MEEEEEE!!!!</span></p>

      <nav className = "social">
        {/*<a href="https://twitter.com/DaGr8_Carlos">
          <i className="fab fa-twitter-square"></i>
        </a>*/}

        <a href="http://www.C-Abdulio.deviantart.com">
          <i className="fab fa-deviantart"></i>
        </a>

        <a href="https://github.com/C-Abdulio">
          <i className="fab fa-github"></i>
        </a>

      </nav>

    </div>
  )
}
