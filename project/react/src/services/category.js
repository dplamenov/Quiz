import config from '../config/index';

const categoryService = {
    getAll() {
        return fetch(`${config.apiUrl}category`, {
            credentials: 'include', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());
    },

    createCategory(data) {
        return fetch(`${config.apiUrl}category`, {
            method: 'POST', body: data,
            credentials: 'include'
        }).then(res => res.json());
    },

    getById(id) {
        return fetch(`${config.apiUrl}category/${id}`, {
            credentials: 'include', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());
    },

    edit(id, name) {
        return fetch(`${config.apiUrl}category/${id}`, {
            method: 'put', body: JSON.stringify({name}), credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());
    },

    delete(id) {
        return fetch(`${config.apiUrl}category/${id}`, {
            method: 'delete', credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());
    }
};

export default categoryService;