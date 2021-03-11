import React, {Component, useState} from "react";
import './Register.css';
import {StoreContext} from "../../store/store";
import {register} from "../../store/actions";
import {useHistory} from "react-router-dom";

function Register() {
    const [email, setEmail] = useState('');
    const [realName, setRealName] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const {dispatch} = React.useContext(StoreContext);
    const history = useHistory();

    const changeHandler = (fn) => {
        return ({target}) => {
            fn(target.value);
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const data = {email, realName, password, repeatPassword};
        dispatch(register(data, () => {
            history.push('/');
        }, () => {
            console.log('error');
        }));
    }

    return (
        <div className="wrapper register-page">
            <h1>Register</h1>
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
