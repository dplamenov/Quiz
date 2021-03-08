import React from 'react';
import './Home.css';
import {Link} from "react-router-dom";

export default class Home extends React.Component {
    renderGuest() {
        return (
            <>
                <h1>Welcome to best quiz game</h1>
                <p><Link to="user/login">Login</Link> | <Link to="user/register">Register</Link></p>
            </>
        );
    }

    renderUser() {
        return (
            <>
                <h1>Welcome</h1>
            </>
        );
    }

    render() {
        return (
            this.props.isLogged ? this.renderUser() : this.renderGuest()
        );
    }
}