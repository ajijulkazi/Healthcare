
import React from 'react';
import { NavLink } from 'react-router-dom';
import {FaHeartbeat,FaBars} from 'react-icons/fa';
import './Header.css';

const Header = () => {
    window.onload = function(){ 
        // your code 
        var menu= document.querySelector('#menu-btn');
    var navbar= document.querySelector('.navbar');

    menu.onclick = () =>{
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    }

    window.onscroll = () =>{
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
    }
    };
    
    
    return (
        <div className='header'>
            <h2 className=''><FaHeartbeat color='green'/> MediLife</h2>
            <div className='navbar'>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/services'>Services</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/doctor'>Doctors</NavLink>
            <NavLink to='/book'>Book</NavLink>
            <NavLink to='/review'>Review</NavLink>
            <NavLink to='/blog'>Blogs</NavLink>
            </div>

            <div id="menu-btn" >
                <FaBars/>
            </div>
        </div>
    );
};

export default Header;