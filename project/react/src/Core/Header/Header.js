import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom";
import {logout} from "../../store/actions";
import {StoreContext} from "../../store/store";
import {toast} from 'react-toastify';
import {useTranslation} from 'react-i18next';
import SelectLanguage from "../SelectLanguage";


function Header(props) {
    const history = useHistory();
    const {t} = useTranslation();
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
            <li>
                Welcome, <Link to="/profile">{state.user?.email}</Link>
            </li>
            {state.user?.access === 'admin' ? <li><Link to="/admin">(admin)</Link></li> : ''}
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
                    <h1 style={{fontFamily: "Caveat"}}><Link to="/">{t('logo-text')}</Link></h1>
                </article>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/stats">Stats</Link></li>
                        {props.isLogged ? userNavigation : guestNavigation}
                    </ul>
                    <SelectLanguage/>
                </nav>
                {props.isLogged ? stats : ''}
            </header>
        </>
    );
}

export default Header;