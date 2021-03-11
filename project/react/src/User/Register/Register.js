import React, {Component, useState} from "react";
import './Register.css';
import {StoreContext} from "../../store/store";
import {register} from "../../store/actions";
// class Register extends Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             email: '',
//             password: '',
//             repeatPassword: '',
//             realName: ''
//         };
//     }
//
//     changeHandler = (event) => {
//         this.setState({[event.target.id]: event.target.value});
//     }
//
//     submitHandler = (e) => {
//         e.preventDefault();
//         console.log(this.state);
//         userService.register(this.state)
//             .then();
//     }
//
//     render() {
//         const {email, password, repeatPassword, realName} = this.state;
//
//         return (
//             <div className="wrapper register-page">
//                 <h1>Register</h1>
//                 <form className="register-form" onSubmit={this.submitHandler}>
//                     <input type="text" name="email" id="email" placeholder="EMAIL" onChange={this.changeHandler}
//                            value={email}/>
//                     <input type="text" name="realName" id="realName" placeholder="REAL NAME"
//                            onChange={this.changeHandler} value={realName}/>
//                     <input type="password" name="password" id="password" placeholder="PASSWORD"
//                            onChange={this.changeHandler} value={password}/>
//                     <input type="password" name="repeatPassword" id="repeatPassword" placeholder="REPEAT PASSWORD"
//                            onChange={this.changeHandler} value={repeatPassword}/>
//                     <button className="btn register-button">Register</button>
//                 </form>
//             </div>
//         );
//     }
// }


function Register() {
    const [email, setEmail] = useState('');
    const [realName, setRealName] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const {dispatch} = React.useContext(StoreContext);

    const changeHandler = (fn) => {
        return ({target}) => {
            fn(target.value);
        }
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log({email, realName, password, repeatPassword});
        const data = {email, realName, password, repeatPassword};
        dispatch(register(data, () => {
            console.log('register 1');
        }, () => {
            console.log('register 2');
        }));
    }

    return (
        <div className="wrapper register-page">
            <h1>Register2</h1>
            <form className="register-form" onSubmit={submitHandler}>
                <input type="text" name="email" id="email" placeholder="EMAIL" onChange={changeHandler(setEmail)}
                       value={email}/>
                <input type="text" name="realName" id="realName" placeholder="REAL NAME"
                       onChange={changeHandler(setRealName)} value={realName}/>
                <input type="password" name="password" id="password" placeholder="PASSWORD"
                       onChange={changeHandler(setPassword)} value={password}/>
                <input type="password" name="repeatPassword" id="repeatPassword" placeholder="REPEAT PASSWORD"
                       onChange={changeHandler(setRepeatPassword)} value={repeatPassword}/>
                <button className="btn register-button">Register</button>
            </form>
        </div>
    );
}


export default Register;
