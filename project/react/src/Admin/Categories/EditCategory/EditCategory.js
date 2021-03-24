import React, {useEffect, useState} from "react";
import './EditCategory.css';
import categoryService from "../../../services/category";
import {toast} from "react-toastify";
import LoaderHOC from "../../../Core/LoaderHOC";

function EditCategory({match, history, startLoader, stopLoader, isLoading}) {
    const [category, setCategory] = useState({});
    const [name, setName] = useState('');

    useEffect(() => {
        startLoader();
        const id = match.params.id;
        categoryService.getById(id)
            .then(category => {
                setCategory(category);
                setName(category.name);
                stopLoader();
            });
    }, [match.params.id]);

    const nameChangeHandler = ({target}) => {
        setName(target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        categoryService.edit(category.id, name)
            .then(() => {
                toast.success('Edited');
                history.push('/admin/categories');
            });
    };

    return (
        !isLoading ?
            <div className="wrapper">
                <h2>Edit category: {category.name}</h2>
                <form onSubmit={submitHandler}>
                    <label>
                        Category name:
                        <input type="text" value={name} onChange={nameChangeHandler}/>
                    </label>
                    <button className="btn">Update</button>
                </form>
            </div> : ''
    );
}

export default LoaderHOC(EditCategory);