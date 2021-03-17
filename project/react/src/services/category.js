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
            credentials: 'include', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());
    }
};

export default categoryService;