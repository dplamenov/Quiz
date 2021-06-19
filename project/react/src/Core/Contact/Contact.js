import React, {useState} from 'react';
import './Contact.css';
import {toast} from "react-toastify";
import Title from "../Title";
import {StoreContext} from "../../store/store";
import mainService from "../../services/main";
import validationHandler, {canSubmit, submitButtonHandler} from "../../helper/validation";

function Contact({history}) {
    const {state: {user}} = React.useContext(StoreContext);
    const [name, setName] = useState(user?.real_name || '');
    const [email, setEmail] = useState(user?.email || '');
    const [message, setMessage] = useState('');

    const [errors, setErrors] = useState({
        invalidName: false,
        invalidMail: false,
        invalidMessage: false
    });

    const inputStateMap = {'name': setName, 'email': setEmail, 'message': setMessage};

    const onChangeHandler = ({target}) => {
        inputStateMap[target.id](target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        mainService.contact(name, email, message);
        toast.success('We will contact soon.');
        history.push('/');
    };

    return (
        <>
            <Title>Contact</Title>
            <h1>Contact</h1>
            <div className="wrapper">
                {!!errors.invalidName ? <p>name must be at least 3 chars</p> : ''}
                {!!errors.invalidMail ? <p>email is not valid</p> : ''}
                {!!errors.invalidMessage ? <p>message must be at least 30 chars</p> : ''}

                <form onSubmit={submitHandler}>
                    <input type="text" className="input" placeholder="Your name" value={name}
                           onChange={onChangeHandler} id="name"
                           onBlur={validationHandler(setErrors, {min: [3, 'invalidName']})}/>
                    <input type="text" className="input" placeholder="Email" onChange={onChangeHandler}
                           id="email" value={email} onBlur={validationHandler(setErrors, {email: 'invalidMail'})}/>
                    <textarea cols="30" rows="10" className="input no-resize" placeholder="Message" value={message}
                              onChange={onChangeHandler} id="message" onBlur={validationHandler(setErrors, {min: [30, 'invalidMessage']})}/>
                    <button className="btn">Contact</button>
                </form>
            </div>
        </>
    );
}

export default Contact;