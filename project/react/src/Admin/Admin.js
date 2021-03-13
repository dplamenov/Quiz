import React from 'react';
import {useRouteMatch} from "react-router";

function Admin(props) {
    let {path, url} = useRouteMatch();

    return (
        <>
            <p>Admin</p>
            
        </>
    );
}

export default Admin;