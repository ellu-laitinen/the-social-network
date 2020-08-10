import React from 'react';

const Register = () => {
    return (
        <div>
            <h1> register here </h1>
            <form>
                <label htmlFor="firstname">First name:</label>
                <input type="text" name="firstname" id="firstname"></input>
                <label htmlFor="lastname">Lastname:</label>
                <input type="text" name="lastname" id="lastname"></input>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" id="username"></input>
                <label htmlFor="password">Password:</label>
                <input type="text" name="password" id="password"></input>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email"></input>
            </form>
            <button>Register</button>
        </div>
    );
}

export default Register;