import React from 'react';
import { NavLink } from 'react-router-dom'

const RegisteredUserLinks = () => {
    return (
        <div>
            <li> <NavLink to="/logout"> Logout </NavLink></li>
        </div>
    );
}

export default RegisteredUserLinks;
