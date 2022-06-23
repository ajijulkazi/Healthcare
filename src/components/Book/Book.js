import React from 'react';
import img from '../../image/book-img.svg';
import './Book.css';
const Book = () => {
    return (
        <div>
          <section className='book' id='book'>
            <h1 className='heading'><span>book</span> now</h1>

            <div className='row'>
                <div className="image">
                  <img src={img} alt="" />
                </div>
                <div className='book-heading'>
                <h3>Book Appointment</h3>
                <form action="">
                  <input type="text" placeholder='Your Name' className='box' />
                  <input type="number" placeholder='Your Number' className='box' />
                  <input type="email" placeholder='Your Email' className='box' />
                  <input type="date" className='box' />
                  <input type="submit" value='book now' className='btn' />
                </form>
                </div>
            </div>
            
            </section> 
        </div>
    );
};

export default Book;