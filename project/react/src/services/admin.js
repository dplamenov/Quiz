import config from '../config/index';

const AdminService = {
    getAllUsers() {
        return fetch(`${config.apiUrl}admin/users`, {
            credentials: 'include', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());
    }
};

export default AdminService;