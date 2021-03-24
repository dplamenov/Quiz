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
            <table className="custom-table">
                <thead>
                <tr>
                    <th>Report ID</th>
                    <th>User</th>
                    <th>Question</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {reports.map(report => {
                    return (
                        <tr className="report-error-table-tr">
                            <td>{report.id}</td>
                            <td>{report.user_id}</td>
                            <td>{report.question_id}</td>
                            <td><img src="images/delete.png" alt=""/></td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </>
    );
}

export default ReportedErrors;