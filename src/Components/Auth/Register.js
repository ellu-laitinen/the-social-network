import React from 'react'
import Firebase from 'firebase';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmission = this.handleSubmission.bind(this)
    }


    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmission = (e) => {
        e.preventDefault();

        Firebase.auth().createUserWithEmailAndPassword(
            this.state.email,
            this.state.password
        ).then(resp => {
            Firebase.firestore().collection('users').doc(resp.user.uid).set({
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email
            }).then(
                console.log('user created'))
        }).catch(err => {
            console.log('error' + err)
        })
        console.log(this.state)
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmission}>
                    <div className="input-field">
                        <input id="firstname" type="text" className="validate" onChange={this.handleChange} />
                        <label htmlFor="firstname">First Name:</label>
                    </div>
                    <div className="input-field">
                        <input id="lastname" type="text" className="validate" onChange={this.handleChange} />
                        <label htmlFor="lastname">Last Name:</label>
                    </div>
                    <div className="input-field">
                        <input id="email" type="text" className="validate" onChange={this.handleChange} />
                        <label htmlFor="email">Email:</label>
                    </div>
                    <div className="input-field">
                        <input id="password" type="password" className="validate" onChange={this.handleChange} />
                        <label htmlFor="password">Password</label>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit" name="action">Register</button>
                </form>
            </div>
        )
    }
}

export default Register;