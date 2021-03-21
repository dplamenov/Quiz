import React, {useEffect, useState} from 'react';
import './Stats.css';
import userService from "../../services/user";
import {StoreContext} from "../../store/store";
import queryString from '../../helper/queryString';
import gameService from "../../services/game";
import user from "../../services/user";

function Stats({location, history}) {
    const [data, setData] = useState({});
    const [pageIndex, setPageIndex] = useState(1);

    const {state} = React.useContext(StoreContext);

    useEffect(() => {
        const qs = queryString(location.search);
        const currentPageIndex = qs.page ? +qs.page : 1;
        setPageIndex(currentPageIndex);
        userService.stats(currentPageIndex)
            .then(stats => {
                setData(stats);
            });
    }, [userService, pageIndex]);

    const prevPage = () => {
        history.push(`?page=${pageIndex - 1}`);
        setPageIndex(i => i - 1);
    };

    const nextPage = () => {
        history.push(`?page=${pageIndex + 1}`);
        setPageIndex(i => i + 1);
    };

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
                </tr>
                </thead>
                <tbody>
                {data?.data?.map((user, i) => {
                    const isCurrentUser = user.id === state?.user?.id;
                    return (
                        <tr key={user.id} className={isCurrentUser ? 'stats-user' : ''}>
                            <td>{data.from + i}</td>
                            <td>{user.email}{isCurrentUser ? '(YOU)' : ''}</td>
                            <td>{user.level}</td>
                            <td>{user.xp}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
            <section className="stats-buttons">
                {pageIndex > 1 ? <button className="btn prev-btn" onClick={prevPage}>Prev page</button> : ''}
                {pageIndex < data?.last_page ?
                    <button className="btn next-btn" onClick={nextPage}>Next page</button> : ''}
            </section>
        </div>
    );
}

export default Stats;