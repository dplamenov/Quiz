import React, {useEffect, useState} from 'react';
import './CreateQuestion.css';
import categoryService from "../../../services/category";

function CreateQuestions() {
    const [categories, setCategories] = useState([]);
    const [answersInputs, setAnswersInputs] = useState([true]);
    const [question, setQuestion] = useState('');
    const [category, setCategory] = useState('');
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        categoryService.getAll()
            .then(categories => {
                setCategories(categories);
            });
    }, []);

    const addMoreAnswerInput = () => {
        setAnswersInputs(inputs => [...inputs, true]);
    };

    const clearAnswerInput = ({target}) => {
        if (answersInputs.length <= 1) {
            return;
        }
        target.parentNode.remove();
    };

    const questionChangeHandler = ({target}) => {
        setQuestion(target.value);
    };

    const categoryChangeHandler = ({target}) => {
        setCategory(target.value);
    };

    const answerChangeHandler = ({target}) => {
        setAnswers(answers => {
            const id = +target.getAttribute('data-id');
            const answer = answers.find(a => a.id === id);

            if (answer) {
                answer.value = target.value;
            }

            const newAnswer = {id, value: target.value, isCorrect: false};

            if (+newAnswer.id === 0) {
                newAnswer.isCorrect = true;
            }

            return answer ? [...answers] : [...answers, newAnswer];
        });
    }

    const changeCorrectAnswer = ({target}) => {
        const value = target.value;
        
        setAnswers(answers => {
            const answer = answers.find(a => a.id === +value);

            answers.forEach(answer => answer.isCorrect = false);
            answer.isCorrect = true

            return [...answers];
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(answers);
    };


    return (
        <>
            <h2 className="admin-panel-questions-create-question-heading">Create question</h2>
            <form onSubmit={submitHandler}>
                <input type="text" className="input" placeholder="QUESTION" value={question}
                       onChange={questionChangeHandler}/>
                <select className="input" value={category} onChange={categoryChangeHandler}>
                    <option value="0" disabled>SELECT CATEGORY</option>
                    {categories.map(category => {
                        return (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        );
                    })}
                </select>
                <div className="admin-panel-question-flex">
                    <h4>Answers</h4>
                    <span onClick={addMoreAnswerInput}>Add more</span>
                </div>
                {answersInputs.map((_, i) => {
                    return (
                        <div key={i}>
                            <input type="text" className="input input-inline" onChange={answerChangeHandler}
                                   data-id={i}/>
                            <span className="remove-input" onClick={clearAnswerInput}>Clear answer</span>
                        </div>
                    );
                })}
                <h4>Choose correct answer</h4>
                <select className="input" onChange={changeCorrectAnswer}>
                    {answers.map(answer => {
                        return (
                            <option key={answer.id} value={answer.id}>{answer.value}</option>
                        );
                    })};
                </select>
                <button className="btn">Create</button>
            </form>
        </>
    );
}

export default CreateQuestions;