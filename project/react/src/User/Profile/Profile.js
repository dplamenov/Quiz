import React from 'react';
import './Profile.css';
import Title from "../../Core/Title";
import {StoreContext} from "../../store/store";

function Profile() {
    const {state: {user}} = React.useContext(StoreContext);

    const dateRegistered = new Date(user.created_at);

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
                <span className="bold">Date registered: </span>
                <span>{dateRegistered.toLocaleDateString()}</span>
            </p>
        </div>
    );
}

export default Profile;