import React from 'react';
import './CategoryCard.css';

function CategoryCard() {
    return (
        <article className="quiz-theme">
            <img src={process.env.PUBLIC_URL + 'images/categories/history.png'} alt=""/>
            <p className="quiz-theme-name">History</p>
        </article>
    );
}

export default CategoryCard;