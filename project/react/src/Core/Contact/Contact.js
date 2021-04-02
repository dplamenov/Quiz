import React from 'react';
import './Contact.css';
import {toast} from "react-toastify";
import Title from "../Title";
import {StoreContext} from "../../store/store";

function Contact({history}) {
    const {state: {user}} = React.useContext(StoreContext);

    const submitHandler = (e) => {
        e.preventDefault();
        toast.success('We will contact soon.');
        history.push('/');
    }

    return (
        <>
            <Title>Contact</Title>
            <h1>Contact</h1>
            <div className="wrapper">
                <form onSubmit={submitHandler}>
                    <input type="text" className="input" placeholder="Your name" value={user?.real_name}/>
                    <input type="text" className="input" placeholder="Email" value={user?.email}/>
                    <textarea cols="30" rows="10" className="input no-resize" placeholder="Message"/>
                    <button className="btn">Contact</button>
                </form>
            </div>
        </>
    );
}

export default Contact;