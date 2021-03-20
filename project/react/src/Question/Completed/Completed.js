import React, {useEffect} from "react";
import './Comleted.css';
import {StoreContext} from "../../store/store";
import {addPoints} from "../../store/actions";

function Completed({points}) {
    const {dispatch, state} = React.useContext(StoreContext);

    useEffect(() => {
        dispatch(addPoints(points));
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