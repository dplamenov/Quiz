import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom";
import {logout} from "../../store/actions";
import {StoreContext} from "../../store/store";
import {toast} from 'react-toastify'

function Header(props) {
    const history = useHistory();
    const {dispatch, state} = React.useContext(StoreContext);

    const logoutHandler = () => {
        dispatch(logout(() => {
            history.push('/');
            toast('Logout');
        }));
    };

    const guestNavigation = (
        <>
            <li><Link to="/user/login">Login</Link></li>
            <li><Link to="/user/register">Register</Link></li>
        </>
    );

    const userNavigation = (
        <>
            <li><Link to="#" onClick={logoutHandler}>Logout</Link></li>
            <li>Welcome, {state.user?.email}
                {state.user?.access === 'admin' ? <Link to="/admin">(admin)</Link> : ''}</li>
        </>
    );

    const stats = (
        <article className={state.user?.points?.fromCurrentLevel === 0 ? 'stats no-xp' : 'stats'}>
            <article className="stats-bar" style={{width: `${state.user?.points?.fromCurrentLevel}%`}}/>
            <p>Level: {state.user?.level} | XP: {state.user?.xp}</p>
        </article>
    );

    return (
        <>
            <header>
                <article className="logo-wrapper">
                    <h1><Link to="/">QUIZ GAME</Link></h1>
                </article>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/stats">Stats</Link></li>
                        {props.isLogged ? userNavigation : guestNavigation}
                    </ul>
                </nav>
                {props.isLogged ? stats : ''}
            </header>

        </>
    );
}

export default Header;