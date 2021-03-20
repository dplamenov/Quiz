import React, {useEffect, useState} from 'react';
import './Stats.css';
import userService from "../../services/user";
import {StoreContext} from "../../store/store";

function Stats() {
    const [stats, setStats] = useState([]);

    const {state} = React.useContext(StoreContext);
    
    useEffect(() => {
        userService.stats()
            .then(stats => {
                setStats(stats);
            });
    }, [userService]);

    return (
        <div className="wrapper">
            <h2 className="stats-heading">Statistics</h2>
            <table className="custom-table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>User email</th>
                    <th>Level</th>
                    <th>XP</th>
                    <th>Favourite category</th>
                </tr>
                </thead>
                <tbody>
                {stats.map((user, i) => {
                    const isCurrentUser = user.id === state.user.id;
                    return (
                        <tr key={user.id} className={isCurrentUser ? 'stats-user' : ''}>
                            <td>{i + 1}</td>
                            <td>{user.email}{isCurrentUser ? '(YOU)' : ''}</td>
                            <td>{user.level}</td>
                            <td>{user.xp}</td>
                            <td>SOON</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}

export default Stats;