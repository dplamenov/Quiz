import React from 'react';
import './WrongAnswer.css';

function WrongAnswer({correct}) {
    return (
        <section className="wrong-answer">
            <h1 className="wrong-answer-heading">Wrong</h1>
            <p className="wrong-answer-text">Correct answer is {correct}</p>
        </section>
    );
}

export default WrongAnswer;