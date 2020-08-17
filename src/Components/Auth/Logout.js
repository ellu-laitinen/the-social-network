import React from 'react';
import Firebase from 'firebase';
import { Redirect } from 'react-router-dom'

class Logout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.logOut = this.logOut.bind(this)
    }

    logOut = () => {
        Firebase.auth().signOut()
            .then(() => {
                if (!this.state.logOUt) {
                    this.setState({
                        logOut: true
                    })
                }
                console.log('logout successful')
            }).catch(err => {
                console.log('error' + err)
            });

    }

    render() {
        return (
            <button onClick={this.logOut}>Logout</button>
        );
    }
}

export default Logout;
