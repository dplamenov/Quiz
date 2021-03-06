import React, {Component} from "react";
import './Register.css';

class Register extends Component {
    render() {
        return (
            <div className="wrapper login-page">
                <h1>Register</h1>
                <form className="login-form">
                    <input type="text" name="email" id="password" placeholder="EMAIL"/>
                    <input type="password" name="password" id="password" placeholder="PASSWORD"/>
                    <button className="login-button">Register</button>
                </form>
            </div>
        );
    }
}

export default Register;