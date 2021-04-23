import React from 'react';
import {withRouter} from "react-router";
import './CategoryCard.css';
import config from "../../config";

function CategoryCard(props) {
    const imageUrl = `${config.imageBaseUrl}${props.id}.png`;

    return (
        <article className="quiz-theme" onClick={() => props.history.push('question/' + props.id)}>
            <img src={imageUrl} alt=""/>
            <p className="quiz-theme-name">{props.name}</p>
            <img src="images/lock.png" alt="" className="lock-image"/>
        </article>
    );
}

export default withRouter(CategoryCard);