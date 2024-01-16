
import React, {Component} from 'react';
import UserMenu from './UserMenu';
import '../styles/Usershome.css'
import { CgProfile } from "react-icons/cg";
import Navbar2 from './Navbar2';
import UserUndsen from './UserUndsen';


export default function Usershome({userData}) {
    const logOut=()=>{
        window.localStorage.clear();
        window.location.href='./sign-in'
    };
        return(
            <div className='user-header'>
                <div className='users-details'>
                    <div className='hereglegch'>
                        <CgProfile /><h1>Хэрэглэгч</h1>
                        <h2>Нэр: {userData.fname}</h2>
                        <h2>Имэйл: {userData.email}</h2>
                        <br/>
                        
                    </div>
                    <div className='hereglegch'>
                        <button onClick={logOut}>Гарах</button>
                    </div>
                </div>
                    <Navbar2/>
                    <UserUndsen/>
                    <UserMenu/>
            </div>
        )
    }
