import React from 'react';
import '../App.css'
import logo from '../logo.svg'

function Navbar() {
  return (
    <nav>
      <div>
      <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div>
        <ul className='Lista-header'>
          <li><a href="">Home</a></li>
          <li><a href="">Productos</a></li>
          <li><a href="">Contacto</a></li>
        </ul>
      </div>
      <div className='Menu-header'>
              <ul className='Lista-header'>
                <li><i class="usuario__iconos fas fa-heart" aria-hidden="true"></i></li>
                  <li><i class="usuario__iconos fas fa-user" aria-hidden="true"></i></li>
                  <li><i class="usuario__iconos fas fa-shopping-bag" aria-hidden="true"></i></li>
              </ul>
      </div>

    </nav>
  );
}

export default Navbar;
