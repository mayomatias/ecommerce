import React from 'react';
import "../../css/style.css"
import { useState } from 'react';

import CartWidget from '../CartWidget/CartWidget';




const NavBar = () =>{
  const [navBarState, setNavBarSatate] = useState(0)
  const imprimir = () => {
    
    console.log("Hola desde una funcion")
    if(navBarState == 0) {
      console.log("Nav en 0")
      setNavBarSatate(1);
    } else {
      setNavBarSatate(0);
    }
  }
  
  return( 
    <nav>
      <ul className="drop-menu" id='nav-drop-menu'>
        <li className="nav-item"><a>Productos</a></li>
        <li className="nav-item"><a>Nosotros</a></li>
        <li className="nav-item"><a>Ayuda</a></li>
      </ul>
      <div>
        <a id='hamburguer-menu' onClick={imprimir} >HAMB</a>  
      </div>
      <div id='search-box'>
        <div />
        <input type='text' />
        <div />
      </div>
      <CartWidget />
    </nav>
  );
}

export default NavBar;