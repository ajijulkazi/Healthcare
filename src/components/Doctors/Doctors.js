import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithubSquare, faInstagramSquare, faLinkedin, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from 'react-router-dom';
import img1 from '../../image/doc-1.jpg';
import img2 from '../../image/doc-2.jpg';
import img3 from '../../image/doc-3.jpg';
import img4 from '../../image/doc-4.jpg';
import img5 from '../../image/doc-5.jpg';
import img6 from '../../image/doc-6.jpg';
import './Doctors.css';
const Doctors = () => {
    return (
        <div>
            <section className='doctors' id='doctors'>
                <h1 className='heading'> Our <span>doctors</span></h1>
                <div className='box-container'>
                    <div className="box">
                        <img src={img1} alt="" />
                        <h3>John deo</h3>
                        <span>expert doctor</span>
                        <div className="share">
                            <NavLink to=''><FontAwesomeIcon className='icon' icon={faFacebook} /></NavLink>
                            <NavLink to=''><FontAwesomeIcon className='icon' icon={faTwitterSquare} /></NavLink>
                            <NavLink to=''><FontAwesomeIcon className='icon' icon={faInstagramSquare} /></NavLink>
                            <NavLink to=''><FontAwesomeIcon className='icon' icon={faLinkedin} /></NavLink>
                            <NavLink to=''><FontAwesomeIcon className='icon' icon={faGithubSquare} /></NavLink>
                        
                        </div>
                    </div>

                    <div className="box">
                        <img src={img2} alt="" />
                        <h3>John deo</h3>
                        <span>expert doctor</span>
                        <div className="share">
                            <NavLink to=''><FontAwesomeIcon className='icon' icon={faFacebook} /></NavLink>
                            <NavLink to=''><FontAwesomeIcon className='icon' icon={faTwitterSquare} /></NavLink>
                            <NavLink to=''><FontAwesomeIcon className='icon' icon={faInstagramSquare} /></NavLink>
                            <NavLink to=''><FontAwesomeIcon className='icon' icon={faLinkedin} /></NavLink>
                            <NavLink to=''><FontAwesomeIcon className='icon' icon={faGithubSquare} /></NavLink>
                        
                        </div>
                    </div>

                    <div className="box">
                        <img src={img3} alt="" />
                        <h3>John deo</h3>
                        <span>expert doctor</span>
                        <div className="share">
                            <NavLink to=''><FontAwesomeIcon className='icon' icon={faFacebook} /></NavLink>
                            <NavLink to=''><FontAwesomeIcon className='icon' icon={faTwitterSquare} /></NavLink>
                            <NavLink to=''><FontAwesomeIcon className='icon' icon={faInstagramSquare} /></NavLink>
                            <NavLink to=''><FontAwesomeIcon className='icon' icon={faLinkedin} /></NavLink>
                            <NavLink to=''><FontAwesomeIcon className='icon' icon={faGithubSquare} /></NavLink>
                        
                        </div>
                    </div>

                    <div className="box">
                        <img src={img4} alt="" />
                        <h3>John deo</h3>
                        <span>expert doctor</span>
                        <div className="share">
                            <NavLink to=''><FontAwesomeIcon className='icon' icon={faFacebook} /></NavLink>
                            <NavLink to=''><FontAwesomeIcon className='icon' icon={faTwitterSquare} /></NavLink>
                            <NavLink to=''><FontAwesomeIcon className='icon' icon={faInstagramSquare} /></NavLink>
                            <NavLink to=''><FontAwesomeIcon className='icon' icon={faLinkedin} /></NavLink>
                            <NavLink to=''><FontAwesomeIcon className='icon' icon={faGithubSquare} /></NavLink>
                        
                        </div>
                    </div>

                    <div className="box">
                        <img src={img5} alt="" />
                        <h3>John deo</h3>
                        <span>expert doctor</span>
                        <div className="share">
                            <NavLink to=''><FontAwesomeIcon className='icon' icon={faFacebook} /></NavLink>
                            <NavLink to=''><FontAwesomeIcon className='icon' icon={faTwitterSquare} /></NavLink>
                            <NavLink to=''><FontAwesomeIcon className='icon' icon={faInstagramSquare} /></NavLink>
                            <NavLink to=''><FontAwesomeIcon className='icon' icon={faLinkedin} /></NavLink>
                            <NavLink to=''><FontAwesomeIcon className='icon' icon={faGithubSquare} /></NavLink>
                        
                        </div>
                    </div>

                    <div className="box">
                        <img src={img6} alt="" />
                        <h3>John deo</h3>
                        <span>expert doctor</span>
                        <div className="share">
                            <NavLink to=''><FontAwesomeIcon className='icon' icon={faFacebook} /></NavLink>
                            <NavLink to=''><FontAwesomeIcon className='icon' icon={faTwitterSquare} /></NavLink>
                            <NavLink to=''><FontAwesomeIcon className='icon' icon={faInstagramSquare} /></NavLink>
                            <NavLink to=''><FontAwesomeIcon className='icon' icon={faLinkedin} /></NavLink>
                            <NavLink to=''><FontAwesomeIcon className='icon' icon={faGithubSquare} /></NavLink>
                        
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Doctors;