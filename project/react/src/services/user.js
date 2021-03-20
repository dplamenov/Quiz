import config from '../config/index';

const userService = {
    register: function (data) {
        return fetch(`${config.apiUrl}user/register`, {
            method: 'post', body: JSON.stringify(data), credentials: 'include', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());
    },

    login: function (data) {
        return fetch(`${config.apiUrl}user/login`, {
            method: 'post', body: JSON.stringify(data), credentials: 'include', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());
    },

    logout: function () {
        return fetch(`${config.apiUrl}user/logout`, {
            method: 'get', credentials: 'include', headers: {
                'Accept': 'application/json'
            }
        }).then(res => res.json());
    },

    addPoints: function (points) {
        return fetch(`${config.apiUrl}user/points`, {
            method: 'post', body: JSON.stringify({points}), credentials: 'include', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());
    },

    stats: function () {
        return fetch(`${config.apiUrl}user/stats`, {
            method: 'get', credentials: 'include', headers: {
                'Accept': 'application/json'
            }
        }).then(res => res.json());
    }
};

export default userService;