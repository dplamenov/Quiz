import React, {useEffect, useState} from "react";
import './ReportedErrors.css';
import questionService from "../../services/question";
import {toast} from 'react-toastify'
import LoaderHOC from "../../Core/LoaderHOC";
import {withRouter} from "react-router";

function ReportedErrors({startLoader, stopLoader, isLoading, history}) {
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
        return (e) => {
            e.stopPropagation();
            questionService.deleteReport(reportId)
                .then(() => {
                    setReports((reports) => {
                        return reports.filter(r => r.id !== reportId);
                    });
                    toast.success("Deleted");
                });
        };
    };

    const acceptReportHandler = (reportId) => {
        return (e) => {
            e.stopPropagation();
            questionService.acceptReport(reportId)
                .then(() => {
                    toast.success('Question edited');
                    toast.success('Report deleted');

                    setReports((reports) => {
                        return reports.filter(r => r.id !== reportId);
                    });
                });
        };
    };

    const selectReportHandler = (id) => {
        return () => {
            history.push(`/admin/report/${id}`);
        }
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
                    <th>Accept</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {reports.map(report => {
                    return (
                        <tr className="report-error-table-tr" key={report.id} onClick={selectReportHandler(report.id)}>
                            <td>{report.id}</td>
                            <td>{report.user}</td>
                            <td>{report.question.substring(0, 30) + '...'}</td>
                            <td><img src="images/ok.png" alt="Accept" onClick={acceptReportHandler(report.id)}
                                     width="16px"/></td>
                            <td><img src="images/delete.png" alt="Delete" onClick={deleteReportHandler(report.id)}/>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
            {reports.length === 0 && !isLoading ? <p>No reports.</p> : ''}
        </>
    );
}

export default withRouter(LoaderHOC(ReportedErrors));