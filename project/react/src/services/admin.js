import config from '../config/index';

const AdminService = {
    getAllUsers() {
        return fetch(`${config.apiUrl}admin/users`, {
            credentials: 'include', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());
    },

    getAllCategories() {
        return fetch(`${config.apiUrl}admin/categories`, {
            credentials: 'include', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());
    },

    getAllQuestions() {
        return fetch(`${config.apiUrl}admin/questions`, {
            credentials: 'include', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());
    }
};

export default AdminService;