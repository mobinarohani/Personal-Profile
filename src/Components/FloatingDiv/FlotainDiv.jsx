import React from 'react'
import './FlotainDiv.css'
function FlotainDiv({ image, txt1, txt2 }) {
    return (
        <div className='flotaindiv'>
            <img src={image} alt="" srcset="" />
            <span>
                {txt1}
                <br />
                {txt2}
            </span>
        </div>
    )
}

export default FlotainDiv