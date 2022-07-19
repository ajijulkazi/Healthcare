import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';
//import { useNavigate } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

import './Login.css';
const Login = () => {
    
     const { signInUsingGoogle} = useAuth();
    // const location = useLocation();
    // const history = useNavigate();
    // const redirect_url = location.state?.from || '/blog';
    // const handleSignInUsingGoogle = () =>{
    //     signInUsingGoogle()
    //     .then(result=>{
    //         history.push(redirect_url);
    //     })
    // }
    // console.log('came from',location.state?.from);
    return (
        <div >
            <section className='login-form' id='login-form'>
            
            
                <h2>Login</h2>
                
                <div className='form-all'>

                <form>
                    <input type="email" name="" id="" placeholder='Your Email' className='box' />
                    <br />
                    <input type="password" name="" id="" placeholder='Password' className='box'/>
                    <br />
                    <input type="submit" value="Submit" className='btn' />
                </form>
                
                
            </div>
            <div className='new-user'>
                    <p>New to MediLife?<NavLink to='/register'>Create Account</NavLink> </p>
                    <div>-----------------or------------------</div>
                    <button 
                    className='signin-btn'
                    onClick={signInUsingGoogle}
                    >Google Sign In</button>
                </div>
            
            </section>
            
        </div>
    );
};

export default Login;