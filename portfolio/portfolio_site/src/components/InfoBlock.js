import React from 'react';
import photo  from '../resources/photo.jpg';

export default function InfoBlock(){
  return(
    <div className = 'info'>
      <img src= { photo }alt="proPic"/>

      <article className="aboutInfo">
        <h1>This is Carlos Abdu</h1>
        <h2>He knows how to draw</h2>
        <h2>He knows how to code</h2>
        <p>  Has skills in writing, editing, media editing, photography,  data organization, streaming, podcasting, interpretive dancing, kazoo playing & ranting with a minor doctorate in general clowning around.</p>
      </article>


    </div>
  )
}
