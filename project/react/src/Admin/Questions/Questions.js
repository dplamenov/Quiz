import React, {useEffect, useState} from 'react';
import './Questions.css';
import adminService from "../../services/admin";

function Questions() {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        adminService.getAllQuestions()
            .then(questions => {
                setQuestions(questions);
            });
    }, []);

    return (
        <>
            <h1>Questions</h1>
            <table className="admin-panel-questions-all">
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
                        <tr>
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
        </>
    );
}

export default Questions;