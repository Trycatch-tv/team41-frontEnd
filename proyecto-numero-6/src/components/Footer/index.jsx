import React from 'react'
import Logo from "../../assets/Logo.svg"
import "./Footer.css"

function Footer() {
  return (
    <footer className='footer__container'>
        <img src={Logo} alt="Logo campus 360" />
    </footer>
  )
}

export  {Footer}