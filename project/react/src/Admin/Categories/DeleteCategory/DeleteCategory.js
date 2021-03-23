import React, {useEffect, useState} from 'react';
import './DeleteCategory.css';
import categoryService from "../../../services/category";

function DeleteCategory({id, closeHandler, yesHandler: redirectHandler}) {
    const [category, setCategory] = useState();

    useEffect(() => {
        categoryService.getById(id)
            .then(category => {
                setCategory(category);
            });
    }, [id]);

    const noHandler = () => {
        closeHandler();
    };

    const yesHandler = () => {
        categoryService.delete(id)
            .then(_ => {
                redirectHandler();
            });
    };

    const endMessage = (qCount) => {
        if (qCount === 0) {
            return '.';
        }

        if (qCount === 1) {
            return ' and 1 question in category.';
        }

        return ` and ${qCount} questions in category.`;
    };

    return (
        <section className="delete-category">
            <h1 className="delete-category-heading">Are you sure?</h1>
            <p className="delete-category-text">
                You will delete category {category?.name}{endMessage(category?.questionsCount)}
            </p>
            <article className="delete-category-image-wrapper">
                <img src="/images/warning.png" alt=""/>
            </article>
            <article className="delete-category-button-wrapper">
                <button className="btn" onClick={yesHandler}>Yes</button>
                <button className="btn" onClick={noHandler}>No</button>
            </article>
        </section>
    );
}

export default DeleteCategory;