import React, {useState} from "react";
import './Register.css';
import {StoreContext} from "../../store/store";
import {register} from "../../store/actions";
import {useHistory} from "react-router-dom";
import validationHandler from "../../helper/validation";

function Register() {
    const [email, setEmail] = useState('');
    const [realName, setRealName] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [errors, setErrors] = useState({
        invalidMail: false,
        minRealName: false,
        minPassword: false,
        matchPassword: false
    });

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
        }, (error) => {
            setErrorMessage(error);
            console.log(error);
        }));
    }

    return (
        <div className="wrapper register-page">
            <h1>Register</h1>
            <form className="register-form" onSubmit={submitHandler}>

                {!!errorMessage ? <p>{errorMessage}</p> : ''}
                {!!errors.invalidMail ? <p>email is not valid</p> : ''}
                {!!errors.minRealName ? <p>real name must be at least 3 chars</p> : ''}
                {!!errors.minPassword ? <p>password must be at least 8 chars</p> : ''}
                {!!errors.matchPassword ? <p>repeat password dont match</p> : ''}

                <input type="text" name="email" id="email" placeholder="EMAIL" onChange={changeHandler(setEmail)}
                       value={email} onBlur={validationHandler(setErrors, {email: 'invalidMail'})}/>
                <input type="text" name="realName" id="realName" placeholder="REAL NAME"
                       onChange={changeHandler(setRealName)} value={realName}
                       onBlur={validationHandler(setErrors, {min: [3, 'minRealName']})}/>
                <input type="password" name="password" id="password" placeholder="PASSWORD"
                       onChange={changeHandler(setPassword)} value={password}
                       onBlur={validationHandler(setErrors, {min: [8, 'minPassword']})}/>
                <input type="password" name="repeatPassword" id="repeatPassword" placeholder="REPEAT PASSWORD"
                       onChange={changeHandler(setRepeatPassword)} value={repeatPassword}
                       onBlur={validationHandler(setErrors, {match: [password, 'matchPassword']})}/>
                <button className="btn register-button">Register</button>
            </form>
        </div>
    );
}


export default Register;
