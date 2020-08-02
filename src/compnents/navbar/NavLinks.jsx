import React from 'react';
import './NavBar.css'

export default function NavLinks() {
 return (
   <div className="navLinksContainer">
     <ul>
       <li>
         <a href="/">Home</a>
       </li>
       <li>
         <a href="projects">Projects</a>
       </li>
       <li>
         <a href="contact">Contact</a>
       </li>
       <li>
         <a href="about">About</a>
       </li>
     </ul>
   </div>
 )
}
