import React from 'react';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faCalendar, faUser, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import img1 from '../../image/blog-1.jpg';
import img2 from '../../image/blog-2.jpg';
import img3 from '../../image/blog-3.jpg';
import './Blogs.css';
const Blogs = () => {
    return (
        <div>
            <section className="blog" id="blog">
                <h1 className="heading">our <span>blogs</span></h1>

                <div className="box-container">

                    <div className="box">
                        <div className="image">
                            <img src={img1} alt="" />
                        </div>

                        <div className="content">
                            <div className="icon">
                            <NavLink to=''><FontAwesomeIcon className='btn-icon' icon={faCalendar} /> 1st july, 2022</NavLink>
                            <NavLink to=''><FontAwesomeIcon className='btn-icon' icon={faUser} /> By Admin</NavLink>
                            </div>
                            <h3>Blog title goes here</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, iste.</p>
                            <NavLink className='btn' to=''> Learn More<FontAwesomeIcon className='btn-icon' icon={faChevronRight} /></NavLink>
                        </div>
                        
                    </div>

                    <div className="box">
                        <div className="image">
                            <img src={img2} alt="" />
                        </div>

                        <div className="content">
                            <div className="icon">
                            <NavLink to=''><FontAwesomeIcon className='btn-icon' icon={faCalendar} /> 1st july, 2022</NavLink>
                            <NavLink to=''><FontAwesomeIcon className='btn-icon' icon={faUser} /> By Admin</NavLink>
                            </div>
                            <h3>Blog title goes here</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, iste.</p>
                            <NavLink className='btn' to=''> Learn More<FontAwesomeIcon className='btn-icon' icon={faChevronRight} /></NavLink>
                        </div>
                        
                    </div>

                    <div className="box">
                        <div className="image">
                            <img src={img3} alt="" />
                        </div>

                        <div className="content">
                            <div className="icon">
                            <NavLink to=''><FontAwesomeIcon className='btn-icon' icon={faCalendar} /> 1st july, 2022</NavLink>
                            <NavLink to=''><FontAwesomeIcon className='btn-icon' icon={faUser} /> By Admin</NavLink>
                            </div>
                            <h3>Blog title goes here</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, iste.</p>
                            <NavLink className='btn' to=''> Learn More<FontAwesomeIcon className='btn-icon' icon={faChevronRight} /></NavLink>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;