import React from 'react';
import {useRouteMatch} from "react-router";
import {Link, Redirect} from "react-router-dom";

function Admin(props) {
    let {path, url} = useRouteMatch();

    console.log(props);

    return (
        <>
            {props.user.access}
            {/*{props.user?.access !== 'admin' ? <Redirect to="/"/> : ''}*/}
            <p>Admin</p>
            <Link to="/admin/users">Users</Link>
        </>
    );
}

export default Admin;