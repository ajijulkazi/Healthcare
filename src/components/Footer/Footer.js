import React from 'react';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faChevronRight, faPhone, faEnvelope, faLocationDot} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <section className="footer">
                <div className="box-container">
                    <div className="box">
                        <h3>quick link</h3>
                        <NavLink  to='/home'><FontAwesomeIcon className='btn-icon' icon={faChevronRight} />Home</NavLink>
                        <NavLink  to='/services'><FontAwesomeIcon className='btn-icon' icon={faChevronRight} />Services</NavLink>
                        <NavLink  to='/about'><FontAwesomeIcon className='btn-icon' icon={faChevronRight} />About</NavLink>
                        <NavLink  to='/doctor'><FontAwesomeIcon className='btn-icon' icon={faChevronRight} />Doctors</NavLink>
                        <NavLink  to='/book'><FontAwesomeIcon className='btn-icon' icon={faChevronRight} />Book</NavLink>
                        <NavLink  to='/review'><FontAwesomeIcon className='btn-icon' icon={faChevronRight} />Review</NavLink>
                        <NavLink  to='/blog'><FontAwesomeIcon className='btn-icon' icon={faChevronRight} />Blogs</NavLink>
                    </div>

                    <div className="box">
                        <h3>Our Services</h3>
                        <NavLink  to='/home'><FontAwesomeIcon className='btn-icon' icon={faChevronRight} />Dental Care</NavLink>
                        <NavLink  to='/services'><FontAwesomeIcon className='btn-icon' icon={faChevronRight} />Message Therapy</NavLink>
                        <NavLink  to='/about'><FontAwesomeIcon className='btn-icon' icon={faChevronRight} />Cardiology</NavLink>
                        <NavLink  to='/doctor'><FontAwesomeIcon className='btn-icon' icon={faChevronRight} />Diagnosis</NavLink>
                        <NavLink  to='/book'><FontAwesomeIcon className='btn-icon' icon={faChevronRight} />Ambulance Services</NavLink>
                    </div>

                    <div className="box">
                        <h3>Contact Info</h3>
                        <NavLink  to=''><FontAwesomeIcon className='btn-icon' icon={faPhone} /> +880-170-001100</NavLink>
                        <NavLink  to=''><FontAwesomeIcon className='btn-icon' icon={faPhone} /> +880-161-001100</NavLink>
                        <NavLink  to=''><FontAwesomeIcon className='btn-icon' icon={faEnvelope} /> abc@gmail.com</NavLink>
                        <NavLink  to=''><FontAwesomeIcon className='btn-icon' icon={faEnvelope} /> xyz@gmail.com</NavLink>
                        <NavLink  to=''><FontAwesomeIcon className='btn-icon' icon={faLocationDot} /> Dhanmondi, Dhaka-1209</NavLink>
                        
                    </div>

                    <div className="box">
                        <h3>follow us</h3>
                        <NavLink  to=''><FontAwesomeIcon className='btn-icon' icon={faFacebook} /> facebook</NavLink>
                        <NavLink  to=''><FontAwesomeIcon className='btn-icon' icon={faTwitter} /> Twitter</NavLink>
                        <NavLink  to=''><FontAwesomeIcon className='btn-icon' icon={faInstagram} /> Instagram</NavLink>
                        <NavLink  to=''><FontAwesomeIcon className='btn-icon' icon={faLinkedin} /> linkedin</NavLink>
                        <NavLink  to=''><FontAwesomeIcon className='btn-icon' icon={faPinterest} /> Pinterest</NavLink>
                        
                        
                    </div>
                    
                </div>

                <div className="credit">created by <span>Ajijul Kazi</span> | all rights reserved</div>
            </section>
            
        </div>
    );
};

export default Footer;