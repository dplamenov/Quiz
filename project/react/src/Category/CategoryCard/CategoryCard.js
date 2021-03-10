import React from 'react';
import './CategoryCard.css';

function CategoryCard(props) {
    const imageUrl = `${process.env.PUBLIC_URL}images/categories/${props.name.toString().toLowerCase()}.png`

    return (
        <article className="quiz-theme">
            <img src={imageUrl} alt=""/>
            <p className="quiz-theme-name">{props.name}</p>
        </article>
    );
}

export default CategoryCard;