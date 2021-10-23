import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import useAuth from './../../Hooks/useAuth';
import { AuthContext } from '../../Context/AuthProvider';
import Shipping from '../../Shipping/Shipping';

const Header = () => {
    const {user , logout} = useAuth();
    return (
        <div className="header">
            <Link to="/home" className="a">Home</Link>
            <Link to="/register"  className="a">Register</Link>
            <Link to="/login"  className="a">Login</Link>
            <Link to="/shipping"  className="a">Shipping</Link>
            <span>{user?.displayName}</span>
            { user?.displayName && <button onClick={logout} className="a">Log out</button>}
        </div>
    );
};

export default Header;