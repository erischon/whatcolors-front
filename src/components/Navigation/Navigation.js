import React from 'react';

import "./Navigation.css"

import { BiPalette } from "react-icons/bi"


const Navigation = ({ onRouteChange, isSignedIn }) => {

  return (
    <nav className='nav__container'>
        <div className='nav__title--container'>
          <BiPalette className='nav__logo--icon'/>

          <div className='nav__logoName--container'>
            <span className="logo__name--1">What</span>
            <span className="logo__name--2">Colors</span>
          </div>

          <div className='nav__subtitle'>Find the colors in your pictures!</div>
        </div>

        <ul>
          <li>About</li>
        </ul>
    </nav>
  );
    
}

export default Navigation;