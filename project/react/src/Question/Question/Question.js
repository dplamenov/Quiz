import React, {useEffect, useState} from "react";
import "./Question.css";
import Answer from "../Answer/Answer";

function Question(props) {
    // console.log(props.match.params.category);

    const [leftSeconds, setLeftSeconds] = useState(10);
    const [isMoreTimeAvailable, setIsMoreTimeAvailable] = useState(true);

    useEffect(() => {
        setInterval(() => {
            tickTimer();
        }, 1000);
    }, []);

    const tickTimer = () => {
        setLeftSeconds(s => s - 1);
    }

    const answerHandler = ({target}) => {
        if(target.tagName !== 'ARTICLE'){
            return;
        }

        const answerId = target.getAttribute('id');
        console.log(answerId);
    }

    return (
        <>
            <h1 className="question-title">
                When bulgaria celebrate christmas?
            </h1>
            <p className="counter-container">
                <span>Left time: </span>
                <span className="counter">{leftSeconds}</span>
                <span>s</span>
            </p>
            <section className="answers" onClick={answerHandler}>
                <Answer id={1} content={"25.12"}/>
                <Answer id={2} content={"01.01"}/>
                <Answer id={3} content={"24.11"}/>
                <Answer id={4} content={"05.03"}/>
            </section>
        </>
    );
}

export default Question;