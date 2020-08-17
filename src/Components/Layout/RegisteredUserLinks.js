import React from 'react'
import { NavLink } from 'react-router-dom';
import Firebase from 'firebase';

class RegisteredUsersLinks extends React.Component {
    logOut = () => {
        Firebase.auth().signOut()
            .then(resp => {
                console.log('User has been logged out');
            }).catch(err => {
                console.log('Some error has occurred while logging out');
            });
    }

    render() {
        return (
            <div>
                <li><NavLink to="/logout" onClick={this.logOut}>Logout</NavLink></li>
                <li><NavLink to="/create" >New Post</NavLink></li>
            </div>
        )
    }
}

export default RegisteredUsersLinks;