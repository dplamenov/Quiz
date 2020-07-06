import React from 'react';
import axios from 'axios';

class Home extends React.Component{
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
        return <p>{this.state.response}</p>;
    }
}