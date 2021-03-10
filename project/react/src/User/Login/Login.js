import React, {useState} from 'react';
import './Login.css';
import {StoreContext} from "../../store/store";
import {login} from "../../store/actions";
import {useHistory} from "react-router-dom";

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const {dispatch} = React.useContext(StoreContext);
    const history = useHistory();

    const emailChangeHandler = ({target}) => {
        setEmail(target.value);
    }

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    }

    const validationHandler = (...validations) => {
        return ({target}) => {
            console.log(target, target.value);
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login({email, password}, () => {
            setErrorMessage('');
            history.push('/');
        }, (error) => {
            setErrorMessage(error);
        }));
    }

    return (
        <div className="wrapper login-page">
            <h1>Login</h1>
            <form className="login-form" onSubmit={submitHandler}>
                {!!errorMessage ? <p>{errorMessage}</p> : ''}
                <p>email is not valid</p>
                <input type="text" name="email" id="email" placeholder="EMAIL" value={email}
                       onChange={emailChangeHandler} onBlur={validationHandler('email')}/>
                <input type="password" name="password" id="password" placeholder="PASSWORD" value={password}
                       onChange={passwordChangeHandler} onBlur={validationHandler}/>
                <button className="btn login-button">Login</button>
            </form>
        </div>
    );
}

export default Login;