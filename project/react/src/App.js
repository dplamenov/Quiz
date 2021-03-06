import React from 'react';
import axios from 'axios';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from "./Pages/Register/Register";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        // this.callApi();
    }

    callApi() {
        axios.get('http://127.0.0.1:3000', {withCredentials: true, accessControlAllowOrigin: 'http://127.0.0.1:3000/'})
            .then(response => {
                this.setState({response: response.data});
            });
    }

    render() {
        return (
            <Router>
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
    }
}

export default App;
