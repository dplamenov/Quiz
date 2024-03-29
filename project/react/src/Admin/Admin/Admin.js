import React, {useEffect, useState} from 'react';
import './Admin.css';
import {useRouteMatch} from "react-router";
import {Link, NavLink, Redirect, Route, Switch} from "react-router-dom";
import Users from "../Users/Users";
import Questions from "../Questions/Questions";
import Categories from "../Categories/Categories";
import CreateCategory from "../Categories/CreateCategory/CreateCategory";
import CreateQuestions from "../Questions/CreateQuestion/CreateQuestion";
import EditCategory from "../Categories/EditCategory/EditCategory";
import HomePage from "../HomePage/HomePage";
import ReportDetails from "../ReportedErrors/ReportDetails/ReportDetails";
import Title from "../../Core/Title";
import CRM from "../CRM/CRM";
import EmailMarketing from "../CRM/EmailMarketing/EmailMarketing";

function Admin(props) {
    const {path} = useRouteMatch();

    return (
        <>
            <Title>Admin panel</Title>
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
                    <li>
                        <NavLink to="/admin/crm" exact>Customer relationship management</NavLink>
                    </li>
                </ul>
            </nav>

            <section className="wrapper">
                <Switch>
                    <Route exact path={path} component={HomePage} />
                    <Route path={`${path}/users`} component={Users} exact/>

                    <Route path={`${path}/questions`} component={Questions} exact/>
                    <Route path={`${path}/questions/create`} component={CreateQuestions} exact/>

                    <Route path={`${path}/categories`} component={Categories} exact/>
                    <Route path={`${path}/categories/create`} component={CreateCategory} exact/>
                    <Route path={`${path}/category/:id/edit`} component={EditCategory} exact/>

                    <Route path={`${path}/crm`} component={CRM} exact />
                    <Route path={`${path}/crm/email-marketing`} component={EmailMarketing} exact />

                    <Route path={`${path}/report/:id`} component={ReportDetails}/>
                </Switch>
            </section>

        </>
    );
}

export default Admin;