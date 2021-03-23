import React from 'react';
import './App.css';
import Header from './Core/Header/Header';
import Home from './Core/Home/Home';
import Login from './User/Login/Login';
import Register from "./User/Register/Register";
import Store, {StoreContext} from "./store/store";
import {loginSuccess} from "./store/actions";
import Loader from "./Core/Loader/Loader";
import Question from "./Question/Question/Question";
import Admin from "./Admin";

import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect
} from "react-router-dom";
import Stats from "./Core/Stats/Stats";
import Notification from "./Core/Notification/Notification";


const Auth = ({children}) => {
    const {dispatch} = React.useContext(StoreContext);
    React.useEffect(() => {
        fetch("https://quiz-api.sharkdev.eu/api/user/auth", {credentials: "include"})
            .then(res => {
                return res.status === 200
                    ? res.json()
                    : res.text().then(text => Promise.reject(text));
            })
            .then(user => dispatch(loginSuccess(user)))
            .catch(() => {
                dispatch(loginSuccess(null));
            });
    }, []);

    return <>{children}</>;
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Store>
                <Auth>
                    <StoreContext.Consumer>
                        {({state}) => {
                            const {user} = state;
                            const isLogged = !!state.user;

                            const notification = state.notification;
                            console.log(state);
                            return user === undefined ? (
                                <Loader/>
                            ) : (
                                <Router>
                                    <Header isLogged={isLogged}/>
                                    {!!notification ? <Notification message={notification.message}
                                                                    type={notification.type}/> : ''}
                                    <Switch>
                                        <Route path="/" exact={true}>
                                            <Home isLogged={isLogged}/>
                                        </Route>
                                        <Route path="/user/login">
                                            {isLogged ? <Redirect to="/"/> : <Login/>}
                                        </Route>
                                        <Route path="/user/register">
                                            {isLogged ? <Redirect to="/"/> : <Register/>}
                                        </Route>
                                        <Route path="/question/:category" component={Question}/>
                                        <Route path="/admin" component={(props) => <Admin {...props} user={user}/>}/>
                                        <Route path="/stats" component={Stats}/>
                                    </Switch>
                                </Router>
                            );
                        }}

                    </StoreContext.Consumer>
                </Auth>
            </Store>
        );
    }
}

export default App;
