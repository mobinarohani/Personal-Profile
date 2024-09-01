import React from 'react'
import './Intro.css'
import githubImg from '../../img/github.png'
import linkedinImg from '../../img/linkedin.png'
import instagramImg from '../../img/instagram.png'
import vector1 from '../../img/Vector1.png'
import vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FlotainDiv from '../FloatingDiv/FlotainDiv'
function Intro() {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hi ! I am</span>
                    <span>Mobina Rohani</span>
                    <span>Frontend Developer with experience in web designing and development , producting the Quality work </span>
                </div>
                <button className="i-button button">Hire me</button>
                <div className="i-icons">
                    <img src={githubImg} alt="github image" />
                    <img src={linkedinImg} alt="linkedin image" />
                    <img src={instagramImg} alt="instagram image" />
                </div>
            </div>

            <div className="i-right">
                <img src={vector1} alt="github image" />
                <img src={vector2} alt="linkedin image" />
                <img src={boy} alt="instagram image" />
                <img src={glassesimoji} alt="instagram image" />
                <div className='container-FlotainDiv1'>
                    <FlotainDiv image={Crown} txt1='Web' txt2='Developer' />
                </div>
                <div className='container-FlotainDiv2'>
                    <FlotainDiv image={thumbup} txt1='Best Design' txt2='Mobina' />
                </div>
            </div>
            {/* blur divs */}
            <div className="blur" style={{ background: "rgb(238, 210, 255)" }}></div>
            <div className="blur" style={{ background: "#C1F5FF" ,top:'23rem',width:'21rem', height:'18rem',left:'35rem'}}></div>
        </div>
    )
}

export default Intro