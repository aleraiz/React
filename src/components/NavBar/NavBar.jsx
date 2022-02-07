import React from 'react';

import LogoNavBar from './LogoNavBar';
import MenuNavbar from './MenuNavbar';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      
      <div class="container-fluid">
        <LogoNavBar/>
        <MenuNavbar/>
        
      </div>
    </nav>
  );
}

export default Navbar;
