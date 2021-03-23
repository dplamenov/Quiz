import React, {useEffect, useState} from "react";
import './Notification.css';
import {StoreContext} from "../../store/store";
import {hideNotification} from "../../store/actions";
import {withRouter} from "react-router";

function Notification({message, type = 'success', history}) {
    const styleClasses = ['notification', type];
    const {dispatch} = React.useContext(StoreContext);
    const [id, setId] = useState(0);

    history.listen(() => {
        dispatch(hideNotification());
        clearInterval(id);
    });

    useEffect(() => {
        const id = setInterval(() => {
            dispatch(hideNotification());
            clearInterval(id);
        }, 3000);

        setId(id);
    }, []);

    return (
        <div className={styleClasses.join(' ')}>
            <p>{message}</p>
        </div>
    )
}

export default withRouter(Notification);