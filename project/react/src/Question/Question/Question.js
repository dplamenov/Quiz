import React, {useEffect, useState} from "react";
import "./Question.css";
import Answer from "../Answer/Answer";
import questionService from "../../services/question";

function Question(props) {
    const [question, setQuestion] = useState({});
    const [leftSeconds, setLeftSeconds] = useState(10);
    const [isMoreTimeAvailable, setIsMoreTimeAvailable] = useState(true);

    const getNextQuestion = () => {
        const catId = props.match.params.category;
        questionService.getQuestion(catId)
            .then(q => {
                q.answers = JSON.parse(q.answers);
                setQuestion(q);
            })
    }

    useEffect(() => {
        getNextQuestion();
        setInterval(() => {
            tickTimer();
        }, 1000);
    }, []);

    const tickTimer = () => {
        setLeftSeconds(s => s - 1);
    }

    const answerHandler = ({target}) => {
        if (target.tagName !== 'ARTICLE') {
            return;
        }

        const answerId = target.getAttribute('id');
        console.log(answerId);
    }

    return (
        <>
            <h1 className="question-title">
                {question.question}
            </h1>
            <p className="counter-container">
                <span>Left time: </span>
                <span className="counter">{leftSeconds}</span>
                <span>s</span>
            </p>
            <section className="answers" onClick={answerHandler}>
                {question.answers?.map((answer, id) => <Answer id={id + 1} content={answer} key={id + 1}/>)}
            </section>
        </>
    );
}

export default Question;