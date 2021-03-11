import React, {useEffect, useState} from "react";
import "./Question.css";

function Question(props) {
    console.log(props.match.params.category);

    const [leftSeconds, setLeftSeconds] = useState(30);

    useEffect(() => {
        setInterval(() => {
            tickTimer();
        }, 1000);
    }, []);

    const tickTimer = () => {
        setLeftSeconds(s => s - 1);
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
            <section className="answers">
                <article className="question">
                    1
                </article>
                <article className="question">
                    2
                </article>
                <article className="question">
                    3
                </article>
                <article className="question">
                    4
                </article>
            </section>
        </>
    );
}

export default Question;