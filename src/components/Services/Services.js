import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faChevronRight,faTruckMedical, faHandHoldingMedical, faUserDoctor, faPills, faProcedures, faHeartbeat} from '@fortawesome/free-solid-svg-icons';
import './Services.css';

const Services = () => {
    return (
        <div>
            <section className='services' id='services'>
                <h1 className='heading'>Our <span>Services</span></h1>
                <div className='box-container'>

                        <div className='box'>
                            <div className='icon-btn'><FontAwesomeIcon  icon={faHandHoldingMedical} /></div>
                        
                            <h3>Free Checkups</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Nam accusantium libero quis expedita atque!</p>
                                <NavLink className='btn' to='/blog'>Learn More <FontAwesomeIcon className='btn-icon' icon={faChevronRight} /></NavLink>
                        </div>

                        <div className='box'>
                        <div className='icon-btn'><FontAwesomeIcon  icon={faTruckMedical} /></div>
                            <h3>24/7 Ambulance</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Nam accusantium libero quis expedita atque!</p>
                                <NavLink className='btn' to='/blog'>Learn More <FontAwesomeIcon className='btn-icon' icon={faChevronRight} /></NavLink>
                        </div>

                        <div className='box'>
                        <div className='icon-btn'><FontAwesomeIcon  icon={faUserDoctor} /></div>
                            <h3>Expert Doctors</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Nam accusantium libero quis expedita expedita atque!</p>
                                <NavLink className='btn' to='/blog'>Learn More <FontAwesomeIcon className='btn-icon' icon={faChevronRight} /></NavLink>
                        </div>

                        <div className='box'>
                        <FontAwesomeIcon className='icon-btn' icon={faPills} />
                            <h3>Medicines</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Nam accusantium libero quis expedita atque!</p>
                                <NavLink className='btn' to='/blog'>Learn More <FontAwesomeIcon className='btn-icon' icon={faChevronRight} /></NavLink>
                        </div>

                        <div className='box'>
                        <FontAwesomeIcon className='icon-btn' icon={faProcedures} />
                            <h3>Bed Facility</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Nam accusantium libero quis expedita atque!</p>
                                <NavLink className='btn' to='/blog'>Learn More <FontAwesomeIcon className='btn-icon' icon={faChevronRight} /></NavLink>
                        </div>

                        <div className='box'>
                        <FontAwesomeIcon className='icon-btn' icon={faHeartbeat} />
                            <h3>Total Care</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Nam accusantium libero quis expedita atque!</p>
                                <NavLink className='btn' to='/blog'>Learn More <FontAwesomeIcon className='btn-icon' icon={faChevronRight} /></NavLink>
                        </div>
                </div>
            </section>
        </div>
    );
};

export default Services;