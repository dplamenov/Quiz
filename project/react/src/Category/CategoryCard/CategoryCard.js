import React from 'react';
import {withRouter} from "react-router";
import './CategoryCard.css';
import config from "../../config";

function CategoryCard(props) {
    const imageUrl = `${config.imageBaseUrl}${props.name.toString().toLowerCase()}.png`;

    return (
        <article className="quiz-theme" onClick={() => props.history.push('question/' + props.id)}>
            <img src={imageUrl} alt=""/>
            <p className="quiz-theme-name">{props.name}</p>
        </article>
    );
}

export default withRouter(CategoryCard);