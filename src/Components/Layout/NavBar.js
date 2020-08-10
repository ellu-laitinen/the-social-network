import React from 'react';
import { Link } from 'react-router-dom'
import Login from '../Auth/Login'
import Register from '../Auth/Register'
import Logo from '../Auth/Logo'
import Logout from '../Auth/Logout'
import NonRegisteredUsersLinks from './NonRegisteredUserLinks'
import RegisteredUsersLinks from './RegisteredUserLinks'



const NavBar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <Link to="/" class="brand-logo"> <Logo /> </Link>
                <ul id="nav-mobile" className="right">

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