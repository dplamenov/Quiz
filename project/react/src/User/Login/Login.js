import React, {useState} from 'react';
import './Login.css';
import {StoreContext} from "../../store/store";
import {login} from "../../store/actions";
import {Link, useHistory} from "react-router-dom";
import validationHandler, {canSubmit, submitButtonHandler} from "../../helper/validation";
import {toast} from "react-toastify";
import LoaderHOC from "../../Core/LoaderHOC";
import Title from "../../Core/Title";
import {useTranslation} from "react-i18next";

function Login({startLoader, stopLoader}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [errors, setErrors] = useState({
        invalidMail: false,
        invalidPassword: false
    });

    const {dispatch} = React.useContext(StoreContext);
    const history = useHistory();
    const { t } = useTranslation();

    const emailChangeHandler = ({target}) => {
        setEmail(target.value);
    }

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        startLoader();
        dispatch(login({email, password}, () => {
            stopLoader();
            setErrorMessage('');
            history.push('/');
            toast.success('Login successful');
        }, (error) => {
            setErrorMessage(error);
            stopLoader();
        }));
    }

    return (
        <div className="wrapper login-page">
            <Title>{t('login-noun')}</Title>
            <h1>Login</h1>
            <form className="login-form" onSubmit={submitHandler}>
                {!!errorMessage ? <p>{errorMessage}</p> : ''}
                {!!errors.invalidMail ? <p>email is not valid</p> : ''}
                {!!errors.invalidPassword ? <p>password must be at least 8 chars</p> : ''}
                <input type="text" name="email" id="email" placeholder="EMAIL" value={email}
                       onChange={emailChangeHandler} onBlur={validationHandler(setErrors, {email: 'invalidMail'})}/>
                <input type="password" name="password" id="password" placeholder="PASSWORD" value={password}
                       onChange={passwordChangeHandler}
                       onBlur={validationHandler(setErrors, {min: [8, 'invalidPassword']})}/>
                <button className="btn login-button" disabled={!canSubmit(errors)}
                        onClick={submitButtonHandler(errors)}>Login
                </button>
            </form>
            <Link to="register">Register</Link>
        </div>
    );
}

export default LoaderHOC(Login);