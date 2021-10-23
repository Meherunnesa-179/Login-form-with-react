import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';

const Login = () => {
    const {signInWithGoogle} = useAuth();
    return (
        <div className="login">
            <h1 className="">Please Login</h1>
            <button onClick={signInWithGoogle}>Login with Google</button>
            <Link to="/register">New user ?</Link>
        </div>
    );
};

export default Login;