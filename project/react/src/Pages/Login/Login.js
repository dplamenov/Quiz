import React, {Component} from "react";
import './Login.css';

class Login extends Component {
    render() {
        return (
            <div className="wrapper login-page">
                <h1>Login</h1>
                <form className="login-form">
                    <input type="text" name="email" id="password" placeholder="EMAIL"/>
                    <input type="password" name="password" id="password" placeholder="PASSWORD"/>
                    <button className="login-button">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;