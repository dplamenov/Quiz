import React, {useEffect, useState} from "react";
import './ReportedErrors.css';
import questionService from "../../services/question";
import {toast} from 'react-toastify'
import LoaderHOC from "../../Core/LoaderHOC";

function ReportedErrors({startLoader, stopLoader}) {
    const [reports, setReports] = useState([]);

    const getReports = () => {
        startLoader();
        questionService.getReports()
            .then(reports => {
                setReports(reports);
                stopLoader();
            });
    };

    useEffect(() => {
        getReports();
    }, []);

    const deleteReportHandler = (reportId) => {
        return () => {
            questionService.deleteReport(reportId)
                .then(() => {
                    setReports((reports) => {
                        return reports.filter(r => r.id !== reportId);
                    });
                    toast("Deleted")
                });
        };
    };

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
                        <tr className="report-error-table-tr" key={report.id}>
                            <td>{report.id}</td>
                            <td>{report.user_id}</td>
                            <td>{report.question_id}</td>
                            <td><img src="images/delete.png" alt="" onClick={deleteReportHandler(report.id)}/></td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
            {reports.length === 0 ? <p>No reports.</p> : ''}
        </>
    );
}

export default LoaderHOC(ReportedErrors);