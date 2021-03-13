import React from 'react';
import {withRouter} from "react-router";
import './CategoryCard.css';

function CategoryCard(props) {
    const imageUrl = `${process.env.PUBLIC_URL}images/categories/${props.name.toString().toLowerCase()}.png`

    console.log(props.history);

    return (
        <article className="quiz-theme" onClick={() => props.history.push('question/'+props.id)}>
            <img src={imageUrl} alt=""/>
            <p className="quiz-theme-name">{props.name}</p>
        </article>
    );
}

export default withRouter(CategoryCard);