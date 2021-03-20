import React, {useEffect, useState} from "react";
import "./Question.css";
import Answer from "../Answer/Answer";
import questionService from "../../services/question";
import TimerEnd from "../TimerEnd/TimerEnd";
import WrongAnswer from "../WrongAnswer/WrongAnswer";
import Completed from "../Completed/Completed";

function Question(props) {
    const [allQuestions, setAllQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [question, setQuestion] = useState({});
    const [leftSeconds, setLeftSeconds] = useState(50);
    const [isMoreTimeAvailable, setIsMoreTimeAvailable] = useState(true);
    const [isAnswerWrong, setIsAnswerWrong] = useState(false);
    const [timerIntervalId, setTimerIntervalId] = useState();
    const [isComplete, setIsComplete] = useState(false);
    const catId = props.match.params.category;


    const getNextQuestion = () => {
        if (!allQuestions[currentQuestionIndex + 1]) {
            setIsComplete(true);
            clearInterval(1);
            return;
        }
        setQuestion(allQuestions[currentQuestionIndex + 1]);
        setIsAnswerWrong(false);
        setLeftSeconds(50);
    }

    useEffect(() => {
        questionService.getQuestion(catId)
            .then(q => {
                q = q.map(q => {
                    q.answers = JSON.parse(q.answers);
                    return q;
                });

                if (q.length === 0) {
                    props.history.push('/');
                    return;
                }

                setAllQuestions(q);
                setQuestion(q[0]);
            });
        setTimerIntervalId(setInterval(() => {
            tickTimer();
        }, 1000));
    }, []);

    const tickTimer = () => {
        setLeftSeconds(s => {
            if (s - 1 <= 0) {
                setIsMoreTimeAvailable(false);
                clearInterval(1);
            }
            return s - 1;
        });

    }

    const answerHandler = ({target}) => {
        if (target.tagName !== 'ARTICLE' || isMoreTimeAvailable !== true) {
            return;
        }

        const answerId = target.getAttribute('id');
        const {correct_answer} = question;

        if (+answerId === +correct_answer) {
            setCurrentQuestionIndex(n => n + 1);
            getNextQuestion();
        } else {
            setIsAnswerWrong(true);
            clearInterval(timerIntervalId);
        }
    }


    return (
        <>
            {!isMoreTimeAvailable ? <TimerEnd/> : ''}
            {isAnswerWrong ? <WrongAnswer correct={question.answers[question.correct_answer - 1]}/> : ''}
            {isComplete ? <Completed points={5} category={catId}/> : ''}
            <h1 className="question-title">
                {question.question}
            </h1>
            <p className="counter-container">
                <span>Left time: </span>
                <span className="counter">{leftSeconds}</span>
                <span>s</span>
            </p>
            <section className={isMoreTimeAvailable ? 'answers' : 'answers disabled'} onClick={answerHandler}>
                {question.answers?.map((answer, id) => <Answer id={id + 1} content={answer} key={id + 1}/>)}
            </section>
        </>
    );
}

export default Question;