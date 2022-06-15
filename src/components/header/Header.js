import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <div>
            <div className="main-header">
                <div id="topbar" className="d-flex align-items-center fixed-top">
                    <div className="container d-flex justify-content-between">
                        <div className="contact-info d-flex align-items-center">
                            <i className="bi bi-envelope" /> <a href="mailto:contact@example.com">cityhospital@example.com</a>
                            <i className="bi bi-phone" /> +91 9988776655
                        </div>
                        <div className="d-none d-lg-flex social-links align-items-center">
                            <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
                            <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                            <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                            <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                        </div>
                    </div>
                </div>
                <header id="header" className="fixed-top">
                    <div className="container d-flex align-items-center">
                        <div className="logo">
                            <NavLink to={'/'}>
                                <h1 className="logo me-auto">City</h1><br />
                                <h2 className="logo-tiny-text me-auto">Multispeciality Hospital</h2>
                           </NavLink>
                        </div>
                        <nav id="navbar" className="navbar order-last order-lg-0">
                            <ul>
                                <li>
                                    <NavLink className="nav-link scrollto active" to={'/'}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink className="nav-link scrollto" to={'/departments'}>Departments</NavLink>
                                </li>
                                <li>
                                    <NavLink className="nav-link scrollto" to={'/doctor'}>Doctors</NavLink>
                                </li>
                                <li>
                                    <NavLink className="nav-link scrollto" to={'/about'}>About</NavLink>
                                </li>
                                <li>
                                    <NavLink className="nav-link scrollto" to={'/medicines'}>Medicines</NavLink>
                                </li>
                                <li>
                                    <NavLink className="nav-link scrollto" to={'/contact'}>Contact</NavLink>
                                </li>
                            </ul>
                            <i className="bi bi-list mobile-nav-toggle" />
                        </nav>
                        {/* <a href="./pages/appointment.html" className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span>
                            Appointment</a> */}
                        <NavLink className="appointment-btn scrollto" to={'/appointment'}><span className="d-none d-md-inline">Make an </span>
                            Appointment</NavLink>
                        <NavLink to={'/login_signin'} className="appointment-btn scrollto">
                            <span className="d-none d-md-inline">Login/ Signup</span>
                        </NavLink>
                    </div>
                </header>
            </div>

        </div>
    );
}

export default Header;