import React from 'react';

const Login = () => {
    return (
        <div className="container">
            <div className="row">
                <h1> Login here </h1>
                <form className="col s12">


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




                </form>
                <button className="waves-effect waves-light btn">Login</button>
            </div>
        </div>
    );
}

export default Login;
