import React, {useEffect} from "react";
import './Comleted.css';
import {StoreContext} from "../../store/store";
import {addPoints} from "../../store/actions";
import gameService from "../../services/game";

function Completed({points, category}) {
    const {dispatch} = React.useContext(StoreContext);

    useEffect(() => {
        dispatch(addPoints(points));
        gameService.storeGame({category})
            .then(() => {
                console.log('store game');
            });
    }, [category, points]);

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