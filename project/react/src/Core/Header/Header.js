import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom";
import {logout} from "../../store/actions";
import {StoreContext} from "../../store/store";

function Header(props) {
    const history = useHistory();
    const {dispatch, state} = React.useContext(StoreContext);

    const logoutHandler = () => {
        dispatch(logout(() => {
            history.push('/');
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

    return (
        <>
            <header>
                <article className="logo-wrapper">
                    <h1><Link to="/">logo</Link></h1>
                </article>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        {props.isLogged ? userNavigation : guestNavigation}
                    </ul>
                </nav>
                <article className="stats">
                    <p>Level: 1 | XP: 133</p>
                </article>
            </header>

        </>
    );
}

export default Header;