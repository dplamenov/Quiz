import React from 'react';
import "./Answer.css";

function Answer({id, content}) {
    return (
        <article className="question" id={id}>
            {content}
        </article>
    );
}

export default Answer;