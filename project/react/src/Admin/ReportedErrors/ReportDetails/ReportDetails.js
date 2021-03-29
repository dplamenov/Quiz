import React, {useEffect, useState} from 'react';
import './ReportDetails.css';
import questionService from "../../../services/question";
import {toast} from "react-toastify";
import LoaderHOC from "../../../Core/LoaderHOC";

function ReportDetails({match, history, startLoader, stopLoader}) {
    const [report, setReport] = useState({});

    useEffect(() => {
        startLoader();
        const id = match.params.id;
        questionService.getReport(id)
            .then(report => {
                report.question.answers = JSON.parse(report.question.answers);
                setReport(report);
                stopLoader();
            });
    }, []);

    const acceptHandler = () => {
        
    };

    const deleteHandler = () => {
        questionService.deleteReport(report.id)
            .then(() => {
                toast.success('Deleted.');
                history.push('/admin');
            });
    };

    return (
        <div className="report-details">
            <h2>Report for {report?.question?.question}</h2>
            <p><span className="bold">Submit by: </span>{report?.user?.email}</p>
            <hr/>
            <p>
                <span className="bold">Question: </span>
                <span>{report?.question?.question}</span>
            </p>
            <h3>Answers: </h3>
            {report?.question?.answers.map((answer, i) => {
                return <p key={i}>{answer}</p>
            })}
            <p>
                <span className="bold">User answer: </span>
                <span>{report?.answer_by_user}</span>
            </p>
            <button className="btn" onClick={acceptHandler}>Accept</button>
            <button className="btn delete-btn" onClick={deleteHandler}>Delete</button>
        </div>
    );
}

export default LoaderHOC(ReportDetails);