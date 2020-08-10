import React from 'react';

const Register = () => {
    return (
        <div className="container">
            <div className="row">
                <h1> Register here </h1>
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s8">
                            <input type="text" name="firstname" id="firstname"></input>
                            <label htmlFor="firstname">First name:</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s8">
                            <input type="text" name="lastname" id="lastname"></input>
                            <label htmlFor="lastname">Lastname:</label>
                        </div>

                    </div>
                    <div className="row">
                        <div className="input-field col s8">
                            <label htmlFor="username">Username:</label>
                            <input type="text" name="username" id="username"></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s8">
                            <label htmlFor="password">Password:</label>
                            <input type="text" name="password" id="password"></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s8">
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" id="email"></input>
                        </div>
                    </div>



                </form>
                <button className="waves-effect waves-light btn">Register</button>
            </div>
        </div>
    );
}

export default Register;