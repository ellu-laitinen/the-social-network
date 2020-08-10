import React from 'react';
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
                <a href="#" class="brand-logo"> <Logo /> </a>
                <ul id="nav-mobile" className="right">

                    <li> <a href="/register"> <Register /> </a></li>
                    <li> <a href="login"> <Login /> </a></li>
                    <li> <a href="#"> <Logout /> </a></li>
                    <li> <a href="#">  <NonRegisteredUsersLinks /> </a></li>
                    <li> <a href="#">  <RegisteredUsersLinks /> </a></li>
                </ul>
            </div>
        </nav>


    )

}

export default NavBar;