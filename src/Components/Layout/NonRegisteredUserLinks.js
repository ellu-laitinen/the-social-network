import React from 'react';

import { NavLink } from 'react-router-dom'

const NonRegisteredUserLinks = () => {
    return (
        <div>

            <li> <NavLink to="/register"> Register </NavLink></li>
            <li> <NavLink to="/login"> Login </NavLink></li>


        </div>
    );
}

export default NonRegisteredUserLinks;
