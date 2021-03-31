import React, {useEffect} from "react";
import './Comleted.css';
import {StoreContext} from "../../store/store";
import {addPoints} from "../../store/actions";
import gameService from "../../services/game";
import {withRouter} from "react-router";
import {toast} from "react-toastify";
import Title from "../../Core/Title";

function Completed({points, category, history}) {
    const {dispatch} = React.useContext(StoreContext);

    useEffect(() => {
        dispatch(addPoints(points));
        gameService.storeGame({category})
            .then(() => {
                toast.success(`You are awesome! You get ${points}points.`);
                console.log('store game');
            });
        setTimeout(() => {
            history.push('/');
        }, 2000);
    }, [category, points]);

    return (
        <>
            <Title>Quiz | Completed</Title>
            <section className="completed">
                <h1 className="completed-heading">You are awesome!</h1>
                <p className="completed-text">You get {points}points.</p>
                <article className="completed-image-wrapper">
                    <img src="/images/ok.png" alt=""/>
                </article>
            </section>
        </>
    );
}

export default withRouter(Completed);