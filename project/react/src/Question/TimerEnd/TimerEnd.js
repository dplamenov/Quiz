import React from 'react';
import './TimerEnd.css';

function TimerEnd({startAgainHandler, goToHomeHandler}) {
    return (
        <section className="timer-end">
            <h1 className="timer-end-heading">Timer End</h1>
            <p className="timer-end-text">Start again</p>
            <article className="timer-end-refresh-wrapper">
                <img src="/images/reload.png" alt=""/>
            </article>
            <article className="flex">
                <button className="btn" onClick={startAgainHandler}>Start again</button>
                <button className="btn" onClick={goToHomeHandler}>Home page</button>
            </article>
        </section>
    );
}

export default TimerEnd;