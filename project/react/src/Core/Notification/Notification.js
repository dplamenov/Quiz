import React, {useEffect, useState} from "react";
import './Notification.css';
import {StoreContext} from "../../store/store";
import {hideNotification} from "../../store/actions";

function Notification({message, type = 'success', setIntervalId}) {
    const styleClasses = ['notification', type];
    const {dispatch} = React.useContext(StoreContext);

    useEffect(() => {
         setInterval(() => {
                dispatch(hideNotification());
            }, 3000)
    }, []);

    return (
        <div className={styleClasses.join(' ')}>
            <p>{message}</p>
        </div>
    )
}

export default Notification;