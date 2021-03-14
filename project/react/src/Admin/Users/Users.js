import React, {useEffect, useState} from 'react';
import adminService from "../../services/admin";

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        adminService.getAllUsers()
            .then(users => setUsers(users));
    }, []);

    return (
        <>
            <h1>Users</h1>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Email</th>
                    <th>Real name</th>
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
                            <td>{user.isOnline ? 'Yes' : 'No'}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </>
    );
}

export default Users;