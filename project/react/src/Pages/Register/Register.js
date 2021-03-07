import React, {Component} from "react";
import './Register.css';
import userService from "../../services/user";

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            repeatPassword: '',
            realName: ''
        };
    }

    changeHandler = (event) => {
        console.log(event.target.id, event.target.value);
        this.setState({[event.target.id]: event.target.value});
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
        // userService.register(this.state)
        //     .then();
    }

    render() {
        const {email, password, repeatPassword, realName} = this.state;

        return (
            <div className="wrapper register-page">
                <h1>Register</h1>
                <form className="register-form" onSubmit={this.submitHandler}>
                    <input type="text" name="email" id="email" placeholder="EMAIL" onChange={this.changeHandler}
                           value={email}/>
                    <input type="text" name="realName" id="realName" placeholder="REAL NAME"
                           onChange={this.changeHandler} value={realName}/>
                    <input type="password" name="password" id="password" placeholder="PASSWORD"
                           onChange={this.changeHandler} value={password}/>
                    <input type="password" name="repeatPassword" id="repeatPassword" placeholder="REPEAT PASSWORD"
                           onChange={this.changeHandler} value={repeatPassword}/>
                    <button className="btn register-button">Register</button>
                </form>
            </div>
        );
    }
}

export default Register;