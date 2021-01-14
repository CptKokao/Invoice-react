import React from 'react';

import "./Hamburger.scss"

const Hamburger = (props) => {

  const {menuActive, updateState} = props;

  return (
    <button
      // onClick меняет У РОДИТЕЛЯ(Slider) props.menuActive, c помощью func menuActive
      onClick={() => updateState(!menuActive)} 
      className = {`hamburger hamburger--collapse ${menuActive ? 'is-active' : ''}`} 
      type="button" 
      aria-label="Menu">
  
      <span className="hamburger-box"><span className="hamburger-label">Menu</span>
      <span className="hamburger-inner" /></span>
    </button>
  )
}

export default Hamburger;

