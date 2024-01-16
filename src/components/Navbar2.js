import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Navbar2.css'

const Navbar2 = () => {
  return (
    <div className='navbar2'>
        <div className='rightSide2'>
          <Link to='/'>Үндсэн</Link>
          <Link to='/ShineMedeeOruulah'>Шинэ мэдээ</Link>
          <Link to='/'>Үрний мэдээлэл</Link>
          <Link to='/'>Үрсэлгээний мэдээлэл</Link>
          <Link to='/'>Худалдааны мэдээлэл</Link>
        </div>
    </div>
  )
}

export default Navbar2