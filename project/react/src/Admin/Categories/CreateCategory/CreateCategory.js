import React, {useState} from 'react'
import './CreateCategory.css';
import categoryService from "../../../services/category";
import {withRouter} from "react-router";

function CreateCategory({history}) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState();

    const nameChangeHandler = ({target}) => {
        setName(target.value);
    }

    const descriptionChangeHandler = ({target}) => {
        setDescription(target.value);
    }

    const fileChangeHandler = ({target}) => {
        setImage(target.files[0]);
    }

    const createCategoryHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', image);
        formData.append('name', name);
        formData.append('description', description);

        categoryService.createCategory(formData)
            .then(category => {
                history.push('/admin/categories');
            });
    }

    return (
        <>
            <h2 className="admin-panel-categories-create-heading">Create category</h2>
            <form onSubmit={createCategoryHandler}>
                <input type="text" className="input" placeholder="CATEGORY NAME" value={name}
                       onChange={nameChangeHandler}/>
                <textarea placeholder="CATEGORY DESCRIPTION" className="input no-resize"
                          rows={10} value={description} onChange={descriptionChangeHandler}/>
                <input type="file" className="input" onChange={fileChangeHandler}/>
                <button className="btn">Create</button>
            </form>
        </>
    );
}

export default withRouter(CreateCategory);