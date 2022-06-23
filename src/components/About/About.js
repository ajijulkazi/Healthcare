import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faChevronRight} from '@fortawesome/free-solid-svg-icons';
import img from '../../image/about-img.svg';
import './About.css';
const About = () => {
    return (
        <div>
            <section className='about' id='about'>
                <h1 className='heading'> <span>about</span> us</h1>
                <div className='row'>
                    <div className="image">
                    <img src={img} alt="" />
                    </div>

                    <div className="content">
                        <h3>We take care of your healthy life</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quia, dolore excepturi 
                            quos porro odio que voluptatem numquam sequi. Quos libero at tempora. Accusamus.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            At nesciunt, nemo harum ipsa totam nisi dolor eaque a quam laborum.</p>

                            <NavLink className='btn' to='/blog'>Contact Us <FontAwesomeIcon className='btn-icon' icon={faChevronRight} /></NavLink>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;