import React from 'react'
import "./Footer.css"
import es_logo from "./logo-es-classic-fff-2.jpg"

const Footer = () => {
    return (
        <section className='footer__container container grid'>
            <img src={ es_logo } alt="logo" className="footer__logo"/>
            <span className='footer__copy'>&#169 Eri Schön All rights reserved</span>
        </section>
    )
}

export default Footer
