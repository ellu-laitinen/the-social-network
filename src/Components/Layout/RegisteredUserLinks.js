import React from 'react';
import { NavLink } from 'react-router-dom'

const RegisteredUserLinks = () => {
    return (
        <div>
            <li> <NavLink to="/"> Logout </NavLink></li>
        </div>
    );
}

export default RegisteredUserLinks;
