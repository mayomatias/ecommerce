import React from 'react';

import CartWidget from '../CartWidget/CartWidget';

const NavBar = () =>{
  return( 
    <nav>
      <div>
        <h1>Logo</h1>
      </div>
      <div>
        <button>Productos</button>
        <button>Nosotros</button>
        <button>Ayuda</button>
      </div>
      <CartWidget />
    </nav>
  );
}

export default NavBar;