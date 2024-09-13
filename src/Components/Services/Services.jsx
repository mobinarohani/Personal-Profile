import React, { useContext } from "react";
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'

function Services() {
    return (
        <div className="services">
            {/* left side */}
            <div className="awesome">
                <span>My Awesome</span>
                <span>Services</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis error deleniti voluptatibus
                    <br />
                    . Mollitia fugiat praesentium rerum,
                </span>
                <button className="button s-button">Download CV</button>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>

            </div>
            {/* right side */}
            <div className="cards">
                <div style={{left:'18rem'}}>
                    <Card
                    emoji={HeartEmoji}
                    heading={'Design'}
                    detail={'Figma , Photoshop,Adobe'}
                    />
                </div>
                <div style={{left:'-4rem' , top:'12rem'}}>
                    <Card
                    emoji={Glasses}
                    heading={'Developer'}
                    detail={'Html , Css , JavaScript'}
                    />
                </div>
                <div style={{left:'14rem' , top:'19rem'}}>
                    <Card
                    emoji={Humble}
                    heading={'UI/UX'}
                    detail={'Lorem ipsum dolor sit amet consectetur adipisicing elit'}
                    />
                </div>
                <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
            </div>
        </div>
    )
}

export default Services