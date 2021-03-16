import React from 'react';
import './Admin.css';
import {useRouteMatch} from "react-router";
import {Link, NavLink, Redirect, Route, Switch} from "react-router-dom";
import Users from "../Users/Users";
import Questions from "../Questions/Questions";
import Categories from "../Categories/Categories";
import CreateCategory from "../Categories/CreateCategory/CreateCategory";

function Admin(props) {
    let {path} = useRouteMatch();

    return (
        <>
            {props.user?.access !== 'admin' ? <Redirect to="/"/> : ''}
            <h1>
                <Link to='/admin' className="admin-panel-heading-a">Admin panel</Link>
            </h1>

            <nav className="admin-panel-nav">
                <ul>
                    <li>
                        <NavLink to="/admin/users" exact> Users</NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/questions" exact>Questions</NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/categories" exact>Categories</NavLink>
                    </li>
                </ul>
            </nav>

            <section className="wrapper">
                <Switch>
                    <Route exact path={path}>
                        <h3 className="please-select-page">Please select page</h3>
                    </Route>
                    <Route path={`${path}/users`} component={Users}/>
                    <Route path={`${path}/questions`} component={Questions}/>
                    <Route path={`${path}/categories`} component={Categories} exact/>
                    <Route path={`${path}/categories/create`} component={CreateCategory}/>
                </Switch>
            </section>

        </>
    );
}

export default Admin;