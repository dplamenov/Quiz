import React from 'react';
import './Profile.css';
import Title from "../../Core/Title";
import {StoreContext} from "../../store/store";

function Profile() {
    const {state: {user}} = React.useContext(StoreContext);

    console.log(user);

    return (
        <div className="user-profile wrapper">
            <Title>User profile</Title>
            <h2 className="profile-heading">User profile</h2>
            <p>
                <span className="bold">Email: </span>
                <span>{user.email}</span>
            </p>
            <p>
                <span className="bold">Access: </span>
                <span>{user.access}</span>
            </p>
            <p>
                <span className="bold">Date register: </span>
                <span>{user.created_at}</span>
            </p>
        </div>
    );
}

export default Profile;