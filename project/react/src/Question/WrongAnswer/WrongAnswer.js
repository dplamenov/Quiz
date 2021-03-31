import React from 'react';
import './WrongAnswer.css';
import Title from "../../Core/Title";

function WrongAnswer({correct, reportForErrorHandler, startAgainHandler, goToHomeHandler}) {
    return (
        <section className="wrong-answer">
            <Title>Quiz | Wrong Answer</Title>
            <h1 className="wrong-answer-heading">Wrong</h1>
            <p className="wrong-answer-text">Correct answer is {correct}</p>
            <p className="wrong-answer-text">
                <span>If you think correct answer is not {correct} you can </span>
                <span onClick={reportForErrorHandler} className="wrong-answer-report-error">Report error</span>
            </p>
            <article className="flex">
                <button className="btn" onClick={startAgainHandler}>Start again</button>
                <button className="btn" onClick={goToHomeHandler}>Home page</button>
            </article>
        </section>
    );
}

export default WrongAnswer;