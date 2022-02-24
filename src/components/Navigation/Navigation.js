import React from 'react';
import "./Navigation.css"
import logo from "./bx-palette.svg"

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
      return (
        <nav className='nav__container'>
            <div className='nav__logo'>
              <img src={ logo } alt="logo" className="logo__image"/>
              <span className="logo__name">What Color</span>
            </div>
            <ul className='nav__list'>
              <li onClick={() => onRouteChange('signout')} className='nav__link'>Sign Out</li>
            </ul>
        </nav>
      );
    } else {
      return (
        <nav className='nav__container'>
          <div className='nav__logo'>
            <img src={ logo } alt="logo" className="logo__image"/>
          </div>
          <ul className='nav__list'>
            <li onClick={() => onRouteChange('signin')} className='nav__link'>Sign In</li>
            <li onClick={() => onRouteChange('register')} className='nav__link'>Register</li>
          </ul>
        </nav>

      );
    }
}

export default Navigation;