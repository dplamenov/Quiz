import React, {useEffect, useState} from 'react';
import './Stats.css';
import userService from "../../services/user";

function Stats() {
    const [stats, setStats] = useState([]);

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
                    <th>User email</th>
                    <th>Level</th>
                    <th>XP</th>
                </tr>
                </thead>
                <tbody>
                {stats.map(stat => {
                    return (
                        <tr>
                            <td>{stat.email}</td>
                            <td>{stat.level}</td>
                            <td>{stat.xp}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}

export default Stats;