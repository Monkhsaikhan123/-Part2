import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/login_component'
import SignUp from './components/signup_component';
import UserDetails from './components/UserDetails';
import Reset from './components/reset';
import AddProduct from './components/addProduct';
import AdminUser from './components/adminUser';
import Navbar from './components/Navbar';
import BidniiTuhai from './components/BidniiTuhai';
import Footer from './components/Footer'
import UserMenu from './components/UserMenu';
import HolbooBarih from './components/HolbooBarih';
import Taniltsuulga from './components/Taniltsuulga';
import UserUndsen from './components/UserUndsen';
import ShineMedeeOruulah from './components/ShineMedeeOruulah';


function App() {
  const isLoggedIn = window.localStorage.getItem('loggedIn')
  return (
   <Router>
      <div className='App'>
 
            <Navbar/>
            <Routes>
                <Route exact path='/' element={isLoggedIn==='true'?<UserDetails/>: <Login/>}/>
                <Route path='/sign-in' element={<Login/>}/>
                <Route path='/sign-up' element={<SignUp/>}/>
                <Route path='/UserDetails' element={<UserDetails/>}/>
                <Route path='/reset' element={<Reset/>}/>
                <Route path='/AddProduct' element={<AddProduct/>}/>
                <Route path='/AdminUser' element={<AdminUser/>}/>
                <Route path='/BidniiTuhai' element={<BidniiTuhai/>}/>
                <Route path='/HolbooBarih' element={<HolbooBarih/>}/>
                <Route path='/UserMenu' element={<UserMenu/>}/>
                <Route path='/Taniltsuulga' element={<Taniltsuulga/>}/>
                <Route path='/UserUndsen' element={<UserUndsen/>}/>



                <Route path='/ShineMedeeOruulah' element={<ShineMedeeOruulah/>}/>

                
          
            </Routes>
            <Footer/>

      </div>
   </Router>
  );
}

export default App;
