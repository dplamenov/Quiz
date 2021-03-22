import React from 'react';
import './WrongAnswer.css';

function WrongAnswer({correct, reportForErrorHandler}) {
    return (
        <section className="wrong-answer">
            <h1 className="wrong-answer-heading">Wrong</h1>
            <p className="wrong-answer-text">Correct answer is {correct}</p>
            <p className="wrong-answer-text">
                <span>If you think correct answer is not {correct} you can </span>
                <span onClick={reportForErrorHandler} className="wrong-answer-report-error">Report error</span>
            </p>
        </section>
    );
}

export default WrongAnswer;