import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends React.Component {
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
        return <p>hi</p>;
    }
}

export default App;
