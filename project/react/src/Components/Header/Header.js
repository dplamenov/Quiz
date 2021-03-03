import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";

export default class Header extends React.Component {
    render() {
        return <header>
            <article className="logo-wrapper">
                <h1>logo</h1>
            </article>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>;
    }
}