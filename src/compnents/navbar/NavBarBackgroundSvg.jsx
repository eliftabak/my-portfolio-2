import React from 'react';
import './NavBar.css'

export default function NavBarBackgroundSvg() {
 return (
   // eslint-disable-next-line
   <div style={({ height: "30px" }, { overflow: "hidden" })}>
     <svg
       viewBox="0 60 500 65"
       preserveAspectRatio="none"
       style={({ height: "20%" }, { width: "100%" })}
     >
       <path
         d="M0.00,92.27 C216.83,192.92 304.30,8.39 500.00,109.03 L500.00,0.00 L0.00,0.00 Z"
         style={{ stroke: "none" }}
       ></path>
     </svg>
   </div>
 )
}
