import React from 'react';
import './Admin.css';
import {useRouteMatch} from "react-router";
import {Link, NavLink, Redirect, Route, Switch} from "react-router-dom";

function Admin(props) {
    let {path, url} = useRouteMatch();

    return (
        <>
            {props.user?.access !== 'admin' ? <Redirect to="/"/> : ''}
            <h1>
                <Link to='/admin' className="admin-panel-heading-a">Admin panel</Link>
            </h1>

            <nav className="admin-panel-nav">
                <ul>
                    <li>
                        <NavLink to="/admin/users">Users</NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/questions">Questions</NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/categories">Categories</NavLink>
                    </li>
                </ul>
            </nav>

            <section className="main-admin-wrapper">
                <Switch>
                    <Route exact path={path}>
                        <h3 className="please-select-page">Please select page</h3>
                    </Route>
                    <Route path={`${path}/users`}>
                       <h1>users</h1>
                    </Route>
                    <Route path={`${path}/questions`}>
                        <h1>questions</h1>
                    </Route>
                    <Route path={`${path}/categories`}>
                        <h1>categories</h1>
                    </Route>
                </Switch>
            </section>

        </>
    );
}

export default Admin;