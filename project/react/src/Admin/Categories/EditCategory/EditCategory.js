import React, {useEffect, useState} from "react";
import './EditCategory.css';
import categoryService from "../../../services/category";

function EditCategory({match, history}) {
    const [category, setCategory] = useState({});
    const [name, setName] = useState('');

    useEffect(() => {
        const id = match.params.id;
        categoryService.getById(id)
            .then(category => {
                setCategory(category);
                setName(category.name);
            });
    }, [categoryService]);

    const nameChangeHandler = ({target}) => {
        setName(target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        categoryService.edit(category.id, name)
            .then(() => {
                history.push('/admin/categories');
            });
    };

    return (
        <div className="wrapper">
            <h2>Edit category: {category.name}</h2>
            <form onSubmit={submitHandler}>
                <label>
                    Category name:
                    <input type="text" value={name} onChange={nameChangeHandler}/>
                </label>
                <button className="btn">Update</button>
            </form>
        </div>
    );
}

export default EditCategory;