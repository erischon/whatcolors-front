import React from 'react'
// import "./Footer.css"
import es_logo from "../assets/images/logo-es-transparent-000-1.png"

const Footer = () => {
    return (
        <section className='flex justify-between items-center container mx-auto h-10 px-2 md:px-0 row-auto'>
            <img src={ es_logo } alt="logo" className="w-8"/>    
            <span className='text-xs'>&copy; { new Date().getFullYear() } Eri Schön All rights reserved</span>
            <span className='text-xs'>v2.0</span>
        </section>
    )
}

export default Footer
