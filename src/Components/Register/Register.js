import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
import useAuth from './../../Hooks/useAuth';

const Register = () => {

    const {handleEmail, handlePassword, handleReg, error} = useAuth();
    return (
        <div>
            <div className="container">
                <div className="forms-container">
                    <div className="signin-signup">
                        <form action="" onSubmit={handleReg} className="sign-in-form">
                            <h2 className="tittle">Please Register</h2>
                            <div className="input-field">
                                 <i className="fas fa-user"></i>
                                 <input type="email" onBlur={handleEmail} placeholder="Enter your Email" required />
                            </div>
                            <div className="input-field">
                                  <i className="fas fa-lock"></i>
                                  <input type="password" onBlur={handlePassword} placeholder="Password" required/>
                            </div>
                                <h3>{error}</h3>
                                <input type="submit" value="Submit" className="btn solid" />
                                <p className="social-text">sign-in with social platform</p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="social-icon">
                                <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="social-icon">
                                <i className="fab fa-google"></i>
                                </a>
                                <a href="#" className="social-icon">
                                <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                            <Link to="/login" className="social-text">Already Registered?</Link>
                        </form>
                       
                    </div>
                    <div className="panel-container"></div>
                </div>
            </div>
        </div>
    );
};

export default Register;