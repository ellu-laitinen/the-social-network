import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import Logo from './Logo'
import RegisteredUserLinks from './RegisteredUserLinks'
import NonRegisteredUserLinks from './NonRegisteredUserLinks'




class NavBar extends React.Component {
    render() {
        return (
            <nav className="nav-wrapper">

                <div className="container">
                    <Logo />
                    {this.props.uid ?
                        <ul className="right">
                            <RegisteredUserLinks />
                        </ul> :
                        <ul className="right">
                            <NonRegisteredUserLinks />



                        </ul>
                    }
                </div>

            </nav>


        )
    }
}

export default NavBar;