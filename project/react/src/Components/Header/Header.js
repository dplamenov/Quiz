import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";

class Header extends React.Component {
    render() {
        const guestNavigation = (
            <>
                <li><Link to="/user/login">Login</Link></li>
                <li><Link to="/user/register">Register</Link></li>
            </>
        );

        const userNavigation = (
            <>
                <li><Link to="/user/logout">Logout</Link></li>
            </>
        );

        return <header>
            <article className="logo-wrapper">
                <h1><Link to="/">logo</Link></h1>
            </article>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </nav>
        </header>;
    }
}

export default Header;