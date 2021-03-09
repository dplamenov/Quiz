import React from 'react';
import './Home.css';
import {Link} from "react-router-dom";

class Home extends React.Component {
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
                {/*<h1>Welcome</h1>*/}
                <h1>Select category</h1>
                <section className="quiz-themes">
                    <article className="quiz-theme">
                        <img src={process.env.PUBLIC_URL + 'images/categories/history.png'} alt=""/>
                        <p className="quiz-theme-name">History</p>
                    </article>
                    <article className="quiz-theme">
                        <img src={process.env.PUBLIC_URL + 'images/categories/geography.png'} alt=""/>
                        <p className="quiz-theme-name">Geography</p>
                    </article>
                    <article className="quiz-theme">
                        <img src={process.env.PUBLIC_URL + 'images/categories/math.png'} alt=""/>
                        <p className="quiz-theme-name">Math</p>
                    </article>
                    <article className="quiz-theme">
                        <img src={process.env.PUBLIC_URL + 'images/categories/music.png'} alt=""/>
                        <p className="quiz-theme-name">Music</p>
                    </article>
                    <article className="quiz-theme">
                        <img src={process.env.PUBLIC_URL + 'images/categories/soccer.png'} alt=""/>
                        <p className="quiz-theme-name">Soccer</p>
                    </article>
                    <article className="quiz-theme">
                        <img src={process.env.PUBLIC_URL + 'images/categories/chemistry.png'} alt=""/>
                        <p className="quiz-theme-name">Chemistry</p>
                    </article>
                    <article className="quiz-theme">
                        <img src={process.env.PUBLIC_URL + 'images/categories/biology.png'} alt=""/>
                        <p className="quiz-theme-name">Biology</p>
                    </article>
                    <article className="quiz-theme">
                        <img src={process.env.PUBLIC_URL + 'images/categories/physics.png'} alt=""/>
                        <p className="quiz-theme-name">Physics</p>
                    </article>
                </section>
            </>
        );
    }

    render() {
        return (
            this.props.isLogged ? this.renderUser() : this.renderGuest()
        );
    }
}

export default Home;