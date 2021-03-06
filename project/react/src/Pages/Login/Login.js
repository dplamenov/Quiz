import React, {Component} from "react";
import './Login.css';
import userService from "../../services/user";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    changeHandler = (event) => {
        this.setState({[event.target.id]: event.target.value});
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
        userService.login()
            .then();
    }

    render() {
        const {email, password} = this.state;

        return (
            <div className="wrapper login-page">
                <h1>Login</h1>
                <form className="login-form" onSubmit={this.submitHandler}>
                    <input type="text" name="email" id="email" placeholder="EMAIL" value={email}
                           onChange={this.changeHandler}/>
                    <input type="password" name="password" id="password" placeholder="PASSWORD" value={password}
                           onChange={this.changeHandler}/>
                    <button className="btn login-button">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;