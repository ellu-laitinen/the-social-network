import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import Logo from './Logo'
import RegisteredUserLinks from './RegisteredUserLinks'
import NonRegisteredUserLinks from './NonRegisteredUserLinks'




const NavBar = () => {
    return (
        <nav className="nav-wrapper">

            <div className="container">
                <Logo />
                <ul className="right hide-on-med-and-down">
                    <NonRegisteredUserLinks />
                    <RegisteredUserLinks />

                </ul>
            </div>

        </nav>


    )

}

export default NavBar;