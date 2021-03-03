import React from 'react';
import axios from 'axios';
import './App.css';
import Header from './Components/Header/Header';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Contact() {
    return <h2>Contact</h2>;
}


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
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/contact">
                        <Contact/>
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
