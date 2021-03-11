import React from 'react';
import './App.css';
import Header from './Core/Header/Header';
import Home from './Core/Home/Home';
import Login from './User/Login/Login';
import Register from "./User/Register/Register";
import Store, {StoreContext} from "./store/store";
import {loginSuccess} from "./store/actions";
import Loader from "./Core/Loader/Loader";

import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect
} from "react-router-dom";
import Question from "./Question/Question/Question";

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
                            return user === undefined ? (
                                <Loader/>
                            ) : (
                                <Router>
                                    <Header isLogged={isLogged}/>
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
