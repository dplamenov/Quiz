import React, {useEffect, useState} from "react";
import './ReportedErrors.css';
import questionService from "../../services/question";
import {StoreContext} from "../../store/store";
import {showNotification} from "../../store/actions";

function ReportedErrors() {
    const [reports, setReports] = useState([]);

    const {dispatch} = React.useContext(StoreContext);

    useEffect(() => {
        questionService.getReports()
            .then(reports => {
                setReports(reports);
            });
    }, []);

    const deleteReportHandler = (reportId) => {
        return () => {
            questionService.deleteReport(reportId)
                .then(() => {
                    dispatch(showNotification('success', 'Deleted.'));
                    setReports((reports) => {
                        return reports.filter(report => report.id !== reportId);
                    });
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
                        <tr className="report-error-table-tr">
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

export default ReportedErrors;