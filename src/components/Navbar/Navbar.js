import React from 'react';
// import { Container, Nav, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    return (
        <div>
            <ul className="d-flex align-items-end justify-content-end">
                <Link to="/about" className="items">
                    {/* <li>Cart</li> */}
                    <i class="fas fa-shopping-cart"></i>
                </Link>
                <Link to="/home" className="items">
                    <li>Home</li>
                </Link>
                <Link to="/login" className="items">
                    <li>Login</li>
                </Link>
                <Link to="/signup" className="items">
                    <li>Signup</li>
                </Link>
            </ul>
        </div>
    );
};

export default Navbar;