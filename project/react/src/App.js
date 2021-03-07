import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from "./Pages/Register/Register";
import Store, {StoreContext} from "./store/store";
import {loginSuccess} from "./store/actions";
// import userService from "./services/user";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const Auth = ({children}) => {
    const {dispatch} = React.useContext(StoreContext);
    console.log(dispatch);
    React.useEffect(() => {
        fetch("https://quiz-api.sharkdev.eu/api/user/auth", {credentials: "include"})
            .then(res =>
                res.status === 200
                    ? res.json()
                    : res.text().then(text => Promise.reject(text))
            )
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
                            console.log(state);
                            const {user} = state;
                            const isLogged = !!state.user;

                            return user === undefined ? (
                                <div>Loading...</div>
                            ) : (
                                <Router>
                                    <p>{isLogged ? 'true' : 'false'}</p>
                                    <Header/>
                                    <Switch>
                                        <Route path="/" exact={true}>
                                            <Home/>
                                        </Route>
                                        <Route path="/user/login">
                                            <Login/>
                                        </Route>
                                        <Route path="/user/register">
                                            <Register/>
                                        </Route>
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
