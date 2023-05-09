import React from 'react';
import "../../css/style.css"

import CartWidget from '../CartWidget/CartWidget';

const NavBar = () =>{
  return( 
    <nav>
      <ul id="menu">
        <li className="nav-item"><a>Productos</a></li>
        <li className="nav-item"><a>Nosotros</a></li>
        <li className="nav-item"><a>Ayuda</a></li>
      </ul>
      <div>
        <h1>Search</h1>
      </div>
      <CartWidget />
    </nav>
  );
}

export default NavBar;