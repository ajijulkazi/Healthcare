import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faChevronRight} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../image/home-img.svg';
import './Home.css';
import Services from '../Services/Services';
import About from '../About/About';
import Doctors from '../Doctors/Doctors';
import Book from '../Book/Book';
import Reviews from '../Review/Reviews';
import Blogs from '../Blogs/Blogs';
const Home = () => {
    return (
        <div>
            <section className='home'  id='home'>
            
            <div className='image'>
                <img src={img}  alt="" />
            </div>
            <div className="content">
                <h3>stay safe, stay healthy</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus iusto ipsum c
                    ommodi magnam odit officia!</p>

                {/*<a href="#" className='btn'>Contact Us <span className='fas fa-chevron-right'></span> </a>*/}
                <NavLink className='btn' to='/blog'>Contact Us <FontAwesomeIcon className='btn-icon' icon={faChevronRight} /></NavLink>
                
                
            </div>

            
            
    
        </section>
        <section>
            <div className='icons-container' id='icon'>
            <div className='icons'>
            <i className='fas fa-user-md'></i>
            <h3>140+</h3>
            <p>Doctor At Work</p>
            </div>

            <div className='icons'>
            <i className='fas fa-users'></i>
            <h3>1040+</h3>
            <p>Satisfied Patients</p>
            </div>

            <div className='icons'>
            <i className='fas fa-procedures'></i>
            <h3>500+</h3>
            <p>Bed Facility </p>
            </div>

            <div className='icons'>
            <i className='fas fa-hospital'></i>
            <h3>80+</h3>
            <p>Available Hospital</p>
            </div>
            </div>
        </section>

        <section>
            <Services></Services>
        </section>
        <section>
            <About></About>
        </section>
        <section>
            <Doctors></Doctors>
        </section>
        <section>
            <Book></Book>
        </section>
        <section>
            <Reviews></Reviews>
        </section>
        <section>
            <Blogs></Blogs>
        </section>
        
        
        
</div>
        
        
    );
};

export default Home;