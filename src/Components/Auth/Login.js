import React from 'react';

const Login = () => {
    return (
        <div>
            <h1>login here</h1>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" id="username"></input>
                <label htmlFor="password">Password:</label>
                <input type="text" name="password" id="password"></input>
            </form>
            <button>Log in</button>
        </div>
    );
}

export default Login;
