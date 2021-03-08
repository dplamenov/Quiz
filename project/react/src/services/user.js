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

    }
};

export default userService;