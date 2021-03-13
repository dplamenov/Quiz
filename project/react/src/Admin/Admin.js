import React from 'react';
import './Admin.css';
import {useRouteMatch} from "react-router";
import {Link, Redirect} from "react-router-dom";

function Admin(props) {
    let {path, url} = useRouteMatch();

    return (
        <>
            {props.user?.access !== 'admin' ? <Redirect to="/"/> : ''}
            <h1>Admin panel</h1>

            <nav className="admin-panel-nav">
                <ul>
                    <li>
                        <Link to="/admin/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/admin/question">Question</Link>
                    </li>
                    <li>
                        <Link to="/admin/category">Category</Link>
                    </li>
                </ul>
            </nav>

        </>
    );
}

export default Admin;