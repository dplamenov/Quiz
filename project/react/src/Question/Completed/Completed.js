import React, {useEffect} from "react";
import './Comleted.css';
import userService from "../../services/user";

function Completed({points}) {
    useEffect(() => {
        userService.addPoints(points)
            .then(userPointsData => {
                console.log(userPointsData);
            });
    }, []);

    return (
        <>
            <section className="completed">
                <h1 className="completed-heading">You are awesome!</h1>
                <p className="completed-text">You got {points}points.</p>
                <article className="completed-image-wrapper">
                    <img src="/images/ok.png" alt=""/>
                </article>
            </section>
        </>
    );
}

export default Completed;