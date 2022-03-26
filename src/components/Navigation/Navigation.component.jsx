import React from 'react';

import { BsPalette2 } from "react-icons/bs"


const Navigation = ({ onRouteChange, isSignedIn }) => {

  return (
    <nav className='h-10 flex-col items-baseline mx-2 my-1'>
        <div className='flex items-baseline'>
          <BsPalette2 className='text-xl mr-2'/>

          <div className='flex gap-x-0.5 items-baseline'>
            <span className="text-xl font-light font-title">what</span>
            <span className="text-xl font-extrabold font-title text-teal-700">colors</span>
          </div>
        </div>
        
        <div className='text-xs md:ml-2'>Find the colors in your pictures!</div>
    </nav>
  );
    
}

export default Navigation;