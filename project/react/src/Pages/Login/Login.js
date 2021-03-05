import React, {Component} from "react";

class Login extends Component {
    render() {
        return (
            <div className="wrapper">
                <h1>Login</h1>
                <form className="login-form">
                    <input type="text" name="email" placeholder="email"/>
                </form>
            </div>
        );
    }
}

export default Login;