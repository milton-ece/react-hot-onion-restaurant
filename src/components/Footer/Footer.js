import React from 'react';
import logo from '../../../src/resources/logo/logo.png';
import './Footer.css';
const Footer = () => {
    return (
        <div className="container">
            {/* <h3>THis is Footer</h3> */}
            <div className="row">
                <div className="col-3 logo">
                    <img src={logo} alt="" />
                </div>
                <div className="col-3">

                </div>
                <div className="col-3">
                    <p>About online food</p>
                    <p>Read Our blog</p>
                    <p>Signup to deliver</p>
                    <p>Add your restaurant</p>
                </div>
                <div className="col-3">
                    <p>Get help</p>
                    <p>Read FAQs</p>
                    <p>View all cities</p>
                    <p>Restaurants near me</p>
                </div>

            </div>
            <div className="row py-5">
                <div className="col-6 d-flex">
                    <small className="ms-3">Copyright c online food 2021</small>
                </div>
                {/* <div className="col-1"></div>
                <div className="col-1"></div>
                <div className="col-1"></div> */}
                <div className="col-2"><small>Privacy policy</small></div>
                <div className="col-2"><small>Terms of use</small></div>
                <div className="col-2"><small>Pricing</small></div>
            </div>
        </div>
    );
};

export default Footer;