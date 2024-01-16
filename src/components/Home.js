import React from 'react'
import {Link} from 'react-router-dom'
import BannerImage from '../assets/image/greenhousefarm.jpg'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className='home' style={{backgroundImage:`url(${BannerImage})`}}>
        <div className='headerContainer' >
            <h1>HELPING GARDENERS GROW</h1>
            <p>
                Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
            <Link to='/menu'>
                <button>Бидэнтэй нэгдэх</button>
            </Link>
            
        </div>
    </div>
  )
}

export default Home