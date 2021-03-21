import React from 'react';
import 'DeleteCategory.css';

function DeleteCategory() {
    return (
        <section className="delete-category">
            <h1 className="delete-category-heading">Are you sure?</h1>
            <p className="delete-category-text">You will delete category _____ and all X question(s) in this
                category.</p>
            <article className="delete-category-image-wrapper">
                <img src="/images/warning.png" alt=""/>
            </article>
        </section>
    );
}

export default DeleteCategory;