import React, {useEffect, useState} from 'react';
import './Questions.css';
import adminService from "../../services/admin";
import LoaderHOC from "../../Core/LoaderHOC";
import questionService from "../../services/question";
import {toast} from "react-toastify";

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

    const deleteHandler = (id) => {
        return () => {
            questionService.delete(id)
                .then(() => {
                    setQuestions(questions => {
                        return questions.filter(q => q.id !== id);
                    });
                    toast.success('Deleted');
                });
        };
    };

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
                    <th>Delete</th>
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
                            <td><img src="/images/delete.png" alt="" onClick={deleteHandler(question.id)}/></td>
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