import React from 'react';
import Firebase from 'firebase';

class Logout extends React.Component {

    handleLogout = (e) => {
        e.preventDefault();

        Firebase.auth().signOut()
            .then(() => {
                console.log('logout successful')
            }).catch(err => {
                console.log('error' + err)
            });
    }



    render() {
        return (
            <button onClick={this.handleLogout}>Logout</button>
        );
    }
}

export default Logout;
