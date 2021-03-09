import config from '../config/index';

const categoryService = {
    getAll() {
        return fetch(`${config.apiUrl}category`, {
            credentials: 'include', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());
    }
};

export default categoryService;