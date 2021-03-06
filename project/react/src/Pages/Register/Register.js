import React, {Component} from "react";
import './Register.css';

class Register extends Component {
    render() {
        return (
            <div className="wrapper register-page">
                <h1>Register</h1>
                <form className="register-form">
                    <input type="text" name="email" id="password" placeholder="EMAIL"/>
                    <input type="text" name="real-name" id="real-name" placeholder="REAL NAME"/>
                    <input type="password" name="password" id="password" placeholder="PASSWORD"/>
                    <input type="password" name="repeat-password" id="repeat-password" placeholder="REPEAT PASSWORD"/>
                    <button className="btn register-button">Register</button>
                </form>
            </div>
        );
    }
}

export default Register;