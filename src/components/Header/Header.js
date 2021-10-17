import React from 'react';
import logo from '../../../src/resources/logo/logo2.png';
// import { Nav, Navbar, Container } from 'react-bootstrap';
import './Header.css';
import header from '../../../src/resources/bannerbackground.png';
import Navbar from '../Navbar/Navbar';
import { FormControl, InputGroup } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';

const Header = () => {
    return (
        <div style={{ backgroundImage: `url(${header})` }} className="header">
            <div className="d-flex justify-content-around">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div>
                    <Navbar></Navbar>
                </div>
            </div>
            <div className="header">
                <h1>Best Food Waiting for Your Taste Buds</h1>
                <InputGroup className="mx-auto w-50">
                    <FormControl
                        placeholder="Search Food Items"
                    />
                    <Button variant="outline-secondary" className="btn btn-danger">
                        Search
                    </Button>
                </InputGroup>

            </div>
        </div>
    );
};

export default Header;