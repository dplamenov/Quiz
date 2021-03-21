import React, {useEffect, useState} from "react";
import './EditCategory.css';
import categoryService from "../../../services/category";

function EditCategory({match}) {
    const [category, setCategory] = useState({});

    useEffect(() => {
        const id = match.params.id;
        categoryService.getById(id)
            .then(category => {
                setCategory(category);
            });
    }, [categoryService]);


    console.log(category);

    return (
        <div className="wrapper">
            <h2>Edit category: {category.name}</h2>
            <label>
                Category name:
                <input type="text" value={category.name}/>
            </label>
            <button className="btn">Update</button>
        </div>
    );
}

export default EditCategory;