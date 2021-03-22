import React from "react";
import './ReportError.css';

function ReportError({question, answers}) {
    return (
        <section className="report-error">
            <h1 className="report-error-heading">Report error</h1>
            <p className="report-error-text">Choose correct answer for you.</p>
            <p>{question}</p>
            <article className="report-error-wrapper">
                <input type="text" list="report-error-answers"  />
                <datalist id="report-error-answers">
                    {answers.map(answer => {
                        return <option>{answer}</option>
                    })}
                </datalist>
            </article>
        </section>
    );
}

export default ReportError;