import React from 'react';
import './DeleteCategory.css';

function DeleteCategory({id, closeHandler}) {

    const noHandler = () => {
        closeHandler();
    };

    return (
        <section className="delete-category">
            <h1 className="delete-category-heading">Are you sure?</h1>
            <p className="delete-category-text">
                You will delete category {id} and all X question(s) in this
                category.
            </p>
            <article className="delete-category-image-wrapper">
                <img src="/images/warning.png" alt=""/>
            </article>
            <article className="delete-category-button-wrapper">
                <button className="btn">Yes</button>
                <button className="btn" onClick={noHandler}>No</button>
            </article>
        </section>
    );
}

export default DeleteCategory;