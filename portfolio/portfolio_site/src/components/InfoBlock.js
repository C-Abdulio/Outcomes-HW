import React from 'react';
import photo  from '../resources/NewPortrait.png';
// import Modal from './Modal.js';
import Resume from './Resume.js';


export default function InfoBlock(props){
  return(
  <div>
    <div className = 'info'>
      <img
      src= { photo }
      alt="proPic"
      // onClick = { () => <Modal />}
      />
      {/*trying to get this image to click to create a modal for my resume*/}

      <article className="aboutInfo">
        <div id="declare">
          <h1>This is Carlos Abdu</h1>
          <h2>He knows how to draw</h2>
          <h2>He knows how to code</h2>
        </div>
        <div>
          <p>  Has skills in writing, editing, media editing, photography,  data organization, streaming, podcasting, interpretive dancing, kazoo playing & ranting with a minor doctorate in general clowning around.</p>
          <h1>Click on my handsome mug for my credentials</h1>
        </div>
      </article>
    </div>
      <Resume />
    </div>
  )
}
