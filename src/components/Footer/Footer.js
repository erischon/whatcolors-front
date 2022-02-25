import React from 'react'
import "./Footer.css"
import es_logo from "./logo-es-transparent-fff-1.png"

const Footer = () => {
    return (
        <section className='footer__container container grid'>
        <span className='footer__copy'>© Eri Schön All rights reserved</span>
        <img src={ es_logo } alt="logo" className="footer__logo"/>
        </section>
    )
}

export default Footer
