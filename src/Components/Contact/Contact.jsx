import React, { useContext, useRef, useState } from "react";
import './Contact.css'
function Contact() {

    const[submit,setSubmit]=useState(false)

    const clickHandler=(event)=>{
        event.preventDefault()
        setSubmit(true)
        setTimeout(()=>{
            setSubmit(false)
        },3000)
    }
  return (
    <div className='contact-form'>
        <div className="w-left">
            <div className="awesome">
                <span>Get in touch</span>
                <span>Contact me</span>
                <div className='blur s-blur1' style={{background:"#ABF1FF94"}}></div>
            </div>
        </div>

        <div className='c-right'>
            <form >
                <input type="text" name='user_name' className='user' placeholder='Name' />
                <input type="email" name='user_email' className='user' placeholder='Email' />
                <textarea name="message" className='user' placeholder='Message'/>
                <input type="submit" value="Send" className='button' onClick={(event)=>clickHandler(event)}/>
                <span>{submit?'Tanks for email !':''}</span>
            </form>
            <div className='blur c-blur' style={{background:"var(--purple"}}></div>
        </div>

    </div>
  )
}

export default Contact