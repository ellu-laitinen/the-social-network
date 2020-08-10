import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../Auth/Logo'




const NavBar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo"> <Logo /> </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">

                    <li> <Link to="/register"> Register </Link></li>
                    <li> <Link to="/login"> Login </Link></li>
                    <li> <Link to="/new-post"> New Post </Link></li>
                    <li> <Link to="/non-registuser"> Non registered user links </Link></li>
                    <li> <Link to="/regist-user"> Registered user links </Link></li>
                    <li> <Link to="/"> Logout </Link></li>

                </ul>
            </div>
        </nav>


    )

}

export default NavBar;