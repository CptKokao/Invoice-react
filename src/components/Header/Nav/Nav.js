import React from 'react';

import './Nav.scss'

const Nav = (props) => {

  return (
    <nav style={{opacity: props.menuActive ? 1 : 0}}>
      <ul>
        <li> <a href="/#">Home</a></li>
        <li> <a href="/#">Products</a></li>
        <li> <a href="/#">About</a></li>
      </ul>
    </nav>
  )
}

export default Nav;