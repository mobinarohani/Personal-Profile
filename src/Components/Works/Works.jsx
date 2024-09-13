import React, { useContext } from "react";
import './Works.css'
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';
function Works() {
    return (
        <div className="works">
            {/* left side */}
            <div className="awesome">
                <span>Works for All these</span>
                <span>Brand & Clients</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis error deleniti voluptatibus
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis error deleniti voluptatibus
                    <br />
                    Mollitia fugiat praesentium rerum,
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis error deleniti voluptatibus
                </span>
                <button className="button s-button">Hire me</button>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>

            </div>
            {/* right side */}
            <div className="w-right">
                <div className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>
                </div>
                {/* Background circle */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    )
}

export default Works