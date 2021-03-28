import React, {useEffect, useState} from 'react';
import './Questions.css';
import adminService from "../../services/admin";
import LoaderHOC from "../../Core/LoaderHOC";

function Questions({history, startLoader, stopLoader}) {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        startLoader();
        adminService.getAllQuestions()
            .then(questions => {
                setQuestions(questions);
                stopLoader();
            });
    }, []);

    return (
        <>
            <h1>Questions</h1>
            <section className="admin-panel-questions-actions">
                <button className="btn" onClick={() => history.push('/admin/questions/create')}>
                    Create question
                </button>
            </section>
            <table className="custom-table admin-panel-questions">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Question</th>
                    <th>Answers</th>
                    <th>Correct answer</th>
                    <th>Category</th>
                </tr>
                </thead>
                <tbody>
                {questions.map(question => {
                    const answers = JSON.parse(question.answers);
                    return (
                        <tr key={question.id}>
                            <td>{question.id}</td>
                            <td>{question.question}</td>
                            <td>{answers.join(', ')}</td>
                            <td>{answers[question.correct_answer - 1]}</td>
                            <td>{question.category}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
            {questions.length === 0 ? <p>No questions.</p> : ''}
        </>
    );
}

export default LoaderHOC(Questions);