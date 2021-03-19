import React from "react";
import './Comleted.css';

function Completed() {
    return (
        <>
            <section className="completed">
                <h1 className="completed-heading">You are awesome!</h1>
                <p className="completed-text">You got 10points.</p>
                <article className="completed-image-wrapper">
                    <img src="/images/ok.png" alt=""/>
                </article>
            </section>
        </>
    );
}

export default Completed;