import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import Logo from './Logo'
import RegisteredUserLinks from './RegisteredUserLinks'
import NonRegisteredUserLinks from './NonRegisteredUserLinks'




const NavBar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <div className="container">
                    <Logo />
                    <ul id="nav-mobile" className="right hide-on-med-and-down">

                        <RegisteredUserLinks />
                        <NonRegisteredUserLinks />


                    </ul>
                </div>
            </div>
        </nav>


    )

}

export default NavBar;