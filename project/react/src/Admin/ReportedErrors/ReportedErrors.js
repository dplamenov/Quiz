import React, {useEffect, useState} from "react";
import './ReportedErrors.css';
import questionService from "../../services/question";

function ReportedErrors() {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        questionService.getReports()
            .then(reports => {
                setReports(reports);
            });
    }, []);

    return (
        <>
            <h2>Question reported for errors</h2>
            <p>only active reports</p>
            <table className="custom-table">
                <thead>
                <tr>
                    <th>Report ID</th>
                    <th>User</th>
                    <th>Question</th>
                    <th>Details</th>
                </tr>
                </thead>
                <tbody>
                {reports.map(report => {
                    return (
                        <tr>
                            <td>{report.id}</td>
                            <td>{report.user_id}</td>
                            <td>{report.question_id}</td>
                            <td>Details</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </>
    );
}

export default ReportedErrors;