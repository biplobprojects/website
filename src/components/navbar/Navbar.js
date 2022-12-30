import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import "./Navbar.css";
import { RxHamburgerMenu } from 'react-icons/rx';
import { RxCross1 } from 'react-icons/rx'
import { AiOutlineUser } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs'
import { BsCart } from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {FaFacebookSquare} from 'react-icons/fa';

import  Logo from '../../assets/images/Logo.png'

const Navbar = () => {

    const [click, setClick] = React.useState(false);

    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);

    return (
        <div>
             {click && <div className='menu-overlay'></div>}
            <div className={click ? "main-container" : ""} onClick={() => Close()} />
            <nav className="navbar p-0">
                <div className="nav-container container d-flex align-items-center justify-content-between">
                    <div className="nav-icon" onClick={handleClick}>
                        {click ? <RxCross1 /> : <RxHamburgerMenu />}
                    </div>
                    <div className='logo-container'>
                        <Link exact to="/">
                            <img src={Logo} />
                        </Link>
                    </div>

                    <div className='mobile-icons'>
                        <Link to="/"><BsSearch /></Link>
                        <Link to="/"><BsCart /></Link>

                    </div>


                    <div className={`${click ? "nav-menu active" : "nav-menu"} d-flex `}>
                        <div className='d-flex justify-content-lg-between nav-item-container '>
                        <ul className='d-flex mb-0 list-unstyled nav-rt'>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/collections/honey"
                                    className="nav-links"
                                    onClick={click ? handleClick : null}
                                >
                                    Honey
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/collections/saffron"
                                    className="nav-links"
                                    onClick={click ? handleClick : null}
                                >
                                    Saffron
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/collections/shilajit"
                                    className="nav-links"
                                    onClick={click ? handleClick : null}
                                >
                                    Shilajit
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/collections/vinegar"
                                    className="nav-links"
                                    onClick={click ? handleClick : null}
                                >
                                    Vinegar
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/collections/immunityandStrength"
                                    className="nav-links"
                                    onClick={click ? handleClick : null}
                                >
                                    Immunity & Strength                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/ourstory"
                                    className="nav-links"
                                    onClick={click ? handleClick : null}
                                >
                                    Our Story              </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/contact"
                                    className="nav-links"
                                    onClick={click ? handleClick : null}
                                >
                                    Contact</NavLink>
                            </li>
                        </ul>

                        <ul className='d-flex mb-0 list-unstyled icon-container nav-lf' >
                            <li className='mobile-hidden'><Link to="/"><BsSearch /></Link></li>
                            <li className='mobile-hidden'><Link to="/login"><AiOutlineUser /></Link></li>
                            <li className='mobile-hidden'><Link to="/"><BsCart /></Link></li>

                            <li className='mobile-visible mb-3'><Link to="/login"><AiOutlineUser />Log In</Link></li>
                            <li className='mobile-visible'><Link to="/"><FaFacebookSquare/></Link><Link to="/"><BsInstagram/></Link></li>
                        </ul>

                    </div>
                    </div>
                </div>

            </nav>
            <Outlet />

        </ div>
    );
}



export default Navbar;