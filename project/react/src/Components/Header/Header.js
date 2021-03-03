import React from 'react';
import './Header.css';

export default class Header extends React.Component {
    render() {
        return <header>
            <article className="logo-wrapper">
                <h1>logo</h1>
            </article>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>;
    }
}