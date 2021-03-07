import config from '../config/index';

const jsonHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

const serviceHelper = {
    post(url, data) {
        return fetch(`${config.apiUrl}${url}`, {
            method: 'post', body: JSON.stringify(data), credentials: 'include', headers: jsonHeaders
        });
    },

    get(url) {
        return fetch(`${config.apiUrl}${url}`, {
            method: 'get', credentials: 'include', headers: jsonHeaders
        });
    }
};

export default serviceHelper;