import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{} from '@fortawesome/free-solid-svg-icons';
import img from '../../image/pic-1.png';
import img1 from '../../image/pic-2.png';
import img2 from '../../image/pic-3.png';
import { faStar, faStarHalf } from '@fortawesome/free-regular-svg-icons';
import './Review.css';
const Reviews = () => {
    return (
        <div>
            <section className="review" id="review">
                <h1 className="heading">clients <span>review</span></h1>

                <div className="box-container">

                    <div className="box">
                        <img src={img} alt="" />
                        <h3>john deo</h3>
                        <div className="starts">
                        {<FontAwesomeIcon className='btn-icon' icon={faStar} />}
                        {<FontAwesomeIcon className='btn-icon' icon={faStar} />}
                        {<FontAwesomeIcon className='btn-icon' icon={faStar} />}
                        {<FontAwesomeIcon className='btn-icon' icon={faStar} />}
                        {<FontAwesomeIcon className='btn-icon' icon={faStarHalf} />}
                        </div>
                        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolor maxime 
                        assumenda vitae quam possimus dolores facilis eius veritatis, ad aut delectus ex neque illo fugiat.
                         Expedita consequatur ipsam laboriosam rem officia magnam labore similique, unde, sequi sapiente
                          quae quibusdam itaque iste, ab quidem ex at corporis? Corrupti odio facilis autem libero debitis
                           voluptate nostrum, eum pariatur explicabo tenetur. Impedit deserunt a nobis aperiam incidunt
                            nostrum dolor molestiae placeat laudantium?</p>
                    </div>
                    

                    <div className="box">
                        <img src={img1} alt="" />
                        <h3>john deo</h3>
                        <div className="starts">
                        {<FontAwesomeIcon className='btn-icon' icon={faStar} />}
                        {<FontAwesomeIcon className='btn-icon' icon={faStar} />}
                        {<FontAwesomeIcon className='btn-icon' icon={faStar} />}
                        {<FontAwesomeIcon className='btn-icon' icon={faStar} />}
                        {<FontAwesomeIcon className='btn-icon' icon={faStarHalf} />}
                        </div>
                        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolor maxime 
                        assumenda vitae quam possimus dolores facilis eius veritatis, ad aut delectus ex neque illo fugiat.
                         Expedita consequatur ipsam laboriosam rem officia magnam labore similique, unde, sequi sapiente
                          quae quibusdam itaque iste, ab quidem ex at corporis? Corrupti odio facilis autem libero debitis
                           voluptate nostrum, eum pariatur explicabo tenetur. Impedit deserunt a nobis aperiam incidunt
                            nostrum dolor molestiae placeat laudantium?</p>
                    </div>

                    <div className="box">
                        <img src={img2} alt="" />
                        <h3>john deo</h3>
                        <div className="starts">
                        {<FontAwesomeIcon className='btn-icon' icon={faStar} />}
                        {<FontAwesomeIcon className='btn-icon' icon={faStar} />}
                        {<FontAwesomeIcon className='btn-icon' icon={faStar} />}
                        {<FontAwesomeIcon className='btn-icon' icon={faStar} />}
                        {<FontAwesomeIcon className='btn-icon' icon={faStarHalf} />}
                        </div>
                        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolor maxime 
                        assumenda vitae quam possimus dolores facilis eius veritatis, ad aut delectus ex neque illo fugiat.
                         Expedita consequatur ipsam laboriosam rem officia magnam labore similique, unde, sequi sapiente
                          quae quibusdam itaque iste, ab quidem ex at corporis? Corrupti odio facilis autem libero debitis
                           voluptate nostrum, eum pariatur explicabo tenetur. Impedit deserunt a nobis aperiam incidunt
                            nostrum dolor molestiae placeat laudantium?</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Reviews;