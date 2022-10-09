import React from 'react';


import './Footer.css'
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import LinkeIn from '../../assets/linkedin.png'


const Footer = () => {
  return (
    <div className="Footer-container">
        <hr/>
        <div className="footer">
            <div className="social-links">
                <img src={Github} alt=""  />
                <img src={Instagram}  alt="" />
                <img src={LinkeIn}  alt="" />
            </div>
            <div className="logo-f">
                <div>&copy; Copyright 2022hello</div>
            </div>
        </div>

        <div className="blur footer-blur"></div>
    </div>
  )
}

export default Footer