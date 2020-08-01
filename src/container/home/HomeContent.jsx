import React from 'react';
import "./Home.css"

export default function HomeContent() {
 return (
  <div>
   <div className="textContainer">
    <h1>Hello, I'm Elif</h1>
    
   </div>
   <div className="imageContainer">
    <img className="workstationImage" src={require('../../compnents/images/workstation.jpg')} />
   </div>
  </div>
 )
}
