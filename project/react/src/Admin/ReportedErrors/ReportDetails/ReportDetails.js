import React, {useEffect, useState} from 'react';
import './ReportDetails.css';
import questionService from "../../../services/question";

function ReportDetails({match}) {
    const [report, setReport] = useState({});

    useEffect(() => {
        const id = match.params.id;
        questionService.getReport(id)
            .then(report => {
                report.question.answers = JSON.parse(report.question.answers);
                setReport(report);
            });
    }, []);

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
            <button className="btn">Accept</button>
            <button className="btn delete-btn">Delete</button>
        </div>
    );
}

export default ReportDetails;