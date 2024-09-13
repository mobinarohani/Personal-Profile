import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'

function Navbar() {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Mobina</div>
            <span><Toggle/></span>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Experience</li>
                    <li>Portfolio</li>
                    <li>Testimonials</li>
                </ul>
            </div>
            <button className="n-button button">
                Contact Us
            </button>
        </div>
    </div>
  )
}

export default Navbar