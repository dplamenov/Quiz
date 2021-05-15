import React from "react";
import "./NotFound.css";
import {useHistory} from "react-router-dom";

function NotFound() {
    const history = useHistory();

    const redirectToHomePage = () => {
        history.push('/');
    };

    return (
        <div id="not-found-page">
            <h1>
                Not found
            </h1>
            <button className="btn center-btn" onClick={redirectToHomePage}>Home page</button>
        </div>
    );
}

export default NotFound;