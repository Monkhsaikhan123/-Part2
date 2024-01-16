
import React, {Component, useState, useEffect, Route,} from 'react';
import {Link} from 'react-router-dom'
import Usershome from './usershome'

import '../styles/UserDetails.css'
import Home from './Home'
import Navbar2 from './Navbar2';
import UserUndsen from './UserUndsen';
import UserMenu from './UserMenu';


export default function UserDetails() {
        const [userData, setUserData] = useState('')
        const [Admin,setAdmin] = useState(false)

        useEffect(()=>{
            fetch('http://localhost:3000/userData',{
                method:"POST",
                crossDomain:true,
                headers:{
                    "Content-Type" : 'application/json',
                    Accept: 'appilcation/json',
                    'Access-Control-Allow-Origin' : '*',
                },
                body:JSON.stringify({
                    token:window.localStorage.getItem("token")
                })
            })
            .then((res)=>res.json())
            .then((data)=>{
                console.log(data,'userData')
                
                if(data.data.Usertype==="Admin"){
                    console.log(data.data.Usertype)
                    setAdmin(true);
                    
                }else{
                    console.log(data.data.Usertype)
                }

                setUserData(data.data)
                if(data.data ==='token expired'){
                    alert("Token expired");
                    window.localStorage.clear();
                    window.location.href='./sign-in'
                }
            })
        }, []);

        const logOut=()=>{
            window.localStorage.clear();
            window.location.href='./sign-in'
        };
        return(
            Admin?
                <div className='Admin' >
                    <div className='Admin-Menu'>
                        <h2>Сайн байна уу</h2>
                        <h2>{userData.email}</h2>
                        <Link to='/addProduct'>Бараа оруулах</Link>
                        <Link to='/ShineMedeeOruulah'>Шинэ мэдээ оруулах</Link>
                        <Link to='/'>Үрний мэдээлэл оруулах</Link>
                        <Link to='/'>Үрсэлгээний мэдээлэл оруулахх</Link>
                        <Link to='/adminUser'>Хэрэглэгчийн мэдээлэл харах</Link>
                        <button onClick={logOut}>Гарах</button>
                </div>
                <div>
                    <Navbar2/>
                    <UserUndsen/>
                    <UserMenu/>
                    <Home/>
                </div>
               
            </div>:<Usershome userData={userData}/>
            
        )
    }
    
