import React ,{useState} from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/image/logo1.png'
import '../styles/Navbar.css'
import { FaAlignJustify } from "react-icons/fa6";


const Navbar = () => {

  const [openLinks, setOpenLinks] = useState(false)
  const toggleNavbar = () => {
    setOpenLinks(!openLinks)
  }
  return (
    <div className='navbar'>
        <div className='leftSide' id={openLinks ? "open" : "close"}>
          <img src={logo}/>
          <div className='hiddenLinks'>
                <Link to='/'>Үндсэн</Link>
                <Link to='/Taniltsuulga'>Танилцуулга</Link>
                <Link to='/HolbooBarih'>Санал хүсэлт</Link>
                <Link to='/BidniiTuhai'>Бидний тухай</Link>
          </div>
        </div>
        <div className='rightSide'>
          <Link to='/'>Үндсэн</Link>
          <Link to='/Taniltsuulga'>Танилцуулга</Link>
          <Link to='/HolbooBarih'>Санал хүсэлт</Link>
          <Link to='/BidniiTuhai'>Бидний тухай</Link>
          <button onClick={toggleNavbar}>
            <FaAlignJustify />
          </button>
        </div>
    </div>
  )
}

export default Navbar