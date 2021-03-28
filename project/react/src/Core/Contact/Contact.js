import React from 'react';
import './Contact.css';
import {toast} from "react-toastify";

function Contact({history}) {

    const submitHandler = (e) => {
        e.preventDefault();
        toast.success('We will contact soon.');
        history.push('/');
    }

    return (
        <>
            <h1>Contact</h1>
            <div className="wrapper">
                <form onClick={submitHandler}>
                    <input type="text" className="input" placeholder="Your name"/>
                    <input type="text" className="input" placeholder="Email"/>
                    <textarea cols="30" rows="10" className="input no-resize" placeholder="Message"/>
                    <button className="btn">Contact</button>
                </form>
            </div>
        </>
    );
}

export default Contact;