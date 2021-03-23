import config from '../config/index';

const jsonHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

const requestHelper = {
    post(url, data) {
        return fetch(`${config.apiUrl}${url}`, {
            method: 'post', body: JSON.stringify(data), credentials: 'include', headers: jsonHeaders
        }).then(res => res.json());
    },

    get(url) {
        return fetch(`${config.apiUrl}${url}`, {
            method: 'get', credentials: 'include', headers: jsonHeaders
        }).then(res => res.json());
    }
};

export default requestHelper;