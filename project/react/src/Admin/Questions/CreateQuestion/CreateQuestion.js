import React, {useState} from 'react';
import './CreateQuestion.css';

function CreateQuestions() {
    const [categories, setCategories] = useState([]);
    const [answersInputs, setAnswersInputs] = useState([true]);

    const addMoreAnswerInput = () => {
        setAnswersInputs(inputs => [...inputs, true]);
    };

    const clearAnswerInput = ({target}) => {
        if (answersInputs.length <= 1) {
            return;
        }
        target.parentNode.remove();
    }

    return (
        <>
            <h2 className="admin-panel-questions-create-question-heading">Create question</h2>
            <form>
                <input type="text" className="input" placeholder="QUESTION"/>
                <select className="input">
                    <option value="0" disabled>SELECT CATEGORY</option>
                </select>

                <h4>Answers</h4>
                <span onClick={addMoreAnswerInput}>Add</span>
                {answersInputs.map((_, i) => {
                    return (
                        <div key={i}>
                            <input type="text" className="input input-inline"/>
                            <span className="remove-input" onClick={clearAnswerInput}>Clear answer</span>
                        </div>
                    );
                })}
            </form>
        </>
    );
}

export default CreateQuestions;