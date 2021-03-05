import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";

class Header extends React.Component {
    render() {
        return <header>
            <article className="logo-wrapper">
                <h1>logo</h1>
            </article>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            </nav>
        </header>;
    }
}

export default Header;