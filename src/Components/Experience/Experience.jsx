import React, { useContext } from "react";
import './Experience.css'
function Experience() {
  return (
    <div className="experience">
        <div className="achievement">
            <div className="circle">8+</div>
            <span>years</span>
            <span>Experience</span>
        </div>
        <div className="achievement">
            <div className="circle">25+</div>
            <span>completed</span>
            <span>Projects</span>
        </div>
        <div className="achievement">
            <div className="circle">5+</div>
            <span>companies</span>
            <span>work</span>
        </div>
    </div>
  )
}

export default Experience