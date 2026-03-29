import React from 'react'
import './footer.css'

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer>

      {/* Logo / Name */}
      <a href="#" className="footer-logo">Zeina Kaso</a>

      {/* Navigation Links */}
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Social Icons */}
      <div className="footer-socials">
        <a href="#" target="_blank"><FaFacebook /></a>
        <a href="#" target="_blank"><FaTwitter /></a>
        <a href="#" target="_blank"><FaInstagram /></a>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <small>© 2026 Zeina Kaso. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer