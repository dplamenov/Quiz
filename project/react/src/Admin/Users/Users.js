import React, {useEffect, useState} from 'react';
import './Users.css';
import adminService from "../../services/admin";
import LoaderHOC from "../../Core/LoaderHOC";

function Users({startLoader, stopLoader}) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        startLoader();
        adminService.getAllUsers()
            .then(users => {
                stopLoader();
                return setUsers(users.sort((u1, u2) => u1.id - u2.id));
            });
    }, []);


    return (
        <>
            <h1>Users</h1>
            <table className="custom-table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Email</th>
                    <th>Real name</th>
                    <th>Role</th>
                    <th>Active</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => {
                    return (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.email}</td>
                            <td>{user.real_name}</td>
                            <td>{user.access}</td>
                            <td>{user.isOnline ? <span className="admin-panel-users-green">Yes</span> :
                                <span className="admin-panel-users-red">No</span>}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </>
    );
}

export default LoaderHOC(Users);