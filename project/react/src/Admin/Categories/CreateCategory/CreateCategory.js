import React, {useState} from 'react'
import './CreateCategory.css';

function CreateCategory() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const nameChangeHandler = ({target}) => {
        setName(target.value);
    }

    const descriptionChangeHandler = ({target}) => {
        setDescription(target.value);
    }


    const createCategoryHandler = (e) => {
        e.preventDefault();
        console.log({name, description})
    }

    return (
        <>
            <h2 className="admin-panel-categories-create-heading">Create category</h2>
            <form onSubmit={createCategoryHandler}>
                <input type="text" className="input" placeholder="CATEGORY NAME" value={name}
                       onChange={nameChangeHandler}/>
                <textarea placeholder="CATEGORY DESCRIPTION" className="input no-resize"
                          rows={10} value={description} onChange={descriptionChangeHandler}/>
                <button className="btn">Create</button>
            </form>
        </>
    );
}

export default CreateCategory;