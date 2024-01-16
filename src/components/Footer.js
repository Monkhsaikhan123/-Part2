import React from 'react'
import { MdOutlineFacebook } from "react-icons/md";
import { PiInstagramLogoBold } from "react-icons/pi";
import { FaYoutube } from "react-icons/fa";
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
       
            <div className='cegedim'>
                <h1>Green's Garden</h1>
                <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
            </div>
            <div className='solutions'>
                <h1>Solutions</h1>
                <p>Neque porro</p>
                <p>quisquam</p>
                <p>dolorem</p>
                <p>ipsum quia</p>
            </div>
            <div className='contact2'>
                <h1>Contact</h1>
                <input placeholder='Enter Message'></input>
                <button type='submit'>Subscribe</button>
            </div>
            <div className='icons'>
                <h1>Contact Us</h1>
                <div className='iconuud'>
                    <MdOutlineFacebook />
                    <PiInstagramLogoBold />
                    <FaYoutube />
                </div>
                
            </div>
        
    </div>
  )
}

export default Footer