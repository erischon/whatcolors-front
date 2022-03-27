import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import es_logo from "../assets/images/logo-es-transparent-000-1.png"

const Footer = () => {
    return (
        <Fragment>
            <section className='flex justify-between items-center container mx-auto h-10 p-2 my-4 row-auto'>
                <img src={ es_logo } alt="logo" className="w-8"/>    
                <span className='text-xs'>&copy; 2022-{ new Date().getFullYear() } Eri Schön All rights reserved</span>
                <span className='text-xs'>v2.0.1</span>
            </section>
        </Fragment>
    )
}

export default Footer
