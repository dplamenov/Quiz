import React, {useState} from "react";
import './ReportError.css';
import questionService from "../../services/question";
import {toast} from "react-toastify";
import Title from "../../Core/Title";

function ReportError({id, question, answers, afterReportHandler}) {
    const [answerValue, setAnswerValue] = useState('');

    const reportHandler = () => {
        questionService.reportForError(id, answerValue)
            .then(() => {
                afterReportHandler();
                toast.success('Report for error');
            });
    };

    const answerChangeHandler = ({target}) => {
        setAnswerValue(target.value);
    };

    return (
        <section className="report-error">
            <Title>Quiz | Report Error</Title>
            <h1 className="report-error-heading">Report error</h1>
            <p className="report-error-text">Choose correct answer for you.</p>
            <p>{question}</p>
            <article className="report-error-wrapper">
                <input type="text" list="report-error-answers" onChange={answerChangeHandler}/>
                <datalist id="report-error-answers">
                    {answers.map((answer, i) => {
                        return <option key={i}>{answer}</option>
                    })}
                </datalist>
                <button className="btn" onClick={reportHandler}>Report</button>
            </article>
        </section>
    );
}

export default ReportError;