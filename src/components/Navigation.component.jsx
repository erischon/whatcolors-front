import React from 'react';

import { Link } from "react-router-dom"
import { BsPalette2 } from "react-icons/bs"
import { Fragment } from 'react/cjs/react.production.min';

import SignIn from '../routes/sign-in.route';


const Navigation = () => {

  return (
    <Fragment>
      <nav className='h-10 container flex justify-between px-2 py-1 mb-4'>
          <div className="container flex flex-col md:flex-row items-baseline">
            <div className='flex items-baseline'>
              <BsPalette2 className='text-xl mr-2'/>

              <div className='flex gap-x-0.5 items-baseline'>
                <span className="text-xl font-light font-title">what</span>
                <span className="text-xl font-extrabold font-title">colors</span>
              </div>
            </div>
            
            <div className='text-xs md:ml-2'>Find the colors in your pictures!</div>
          </div>

          <div className='container flex justify-end text-sm items-center'>
            <SignIn />
          </div>
      </nav>

    </Fragment>
  );
    
}

export default Navigation;