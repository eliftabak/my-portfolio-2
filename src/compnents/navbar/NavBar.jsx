import React from 'react';
import NavBarBackgroundSvg from "./NavBarBackgroundSvg"
import NavLinks from "./NavLinks";

export default function NavBar() {
 return (
   <div>
     <div className="navbarBackgroundSvg">
       <NavBarBackgroundSvg />
     </div>
     <div>
      <NavLinks />
     </div>
   </div>
 )
}
