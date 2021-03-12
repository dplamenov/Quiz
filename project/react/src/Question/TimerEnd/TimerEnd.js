import React from 'react';
import './TimerEnd.css';

function TimerEnd() {
    return (
        <section className="timer-end">
            <h1 className="timer-end-heading">Timer End</h1>
            <p className="timer-end-text">Start again</p>
            <article className="timer-end-refresh-wrapper">
                <img src="/images/reload.png" alt=""/>
            </article>
        </section>
    );
}

export default TimerEnd;