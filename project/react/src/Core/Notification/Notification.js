import React, {useEffect, useState} from "react";
import './Notification.css';

function Notification({message, type = 'success'}) {
    const [styleClasses, setStyleClasses] = useState(['notification', type]);

    useEffect(() => {
        setInterval(() => {
            setStyleClasses(styles => [...styles, 'hidden']);
        }, 3000);
    }, []);

    return (
        <div className={styleClasses.join(' ')}>
            <p>{message}</p>
        </div>
    )
}

export default Notification;