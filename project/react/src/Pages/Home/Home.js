import React from 'react';
import axios from 'axios';
import './Home.css';
import {Link} from "react-router-dom";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.callApi();
    }

    callApi() {
        axios.get('http://127.0.0.1:3000', {withCredentials: true, accessControlAllowOrigin: 'http://127.0.0.1:3000/'})
            .then(response => {
                this.setState({response: response.data});
            });
    }

    render() {
        return <React.Fragment>
            <h1>Welcome to best quiz game</h1>
            <p><Link to="user/login">Login</Link> | <Link to="user/register">Register</Link></p>
        </React.Fragment>
    }
}