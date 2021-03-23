import config from '../config/index';
import request from "../helper/request";

const categoryService = {
    getAll() {
        return request.get('category');
    },

    createCategory(data) {
        //formData
        return fetch(`${config.apiUrl}category`, {
            method: 'POST', body: data,
            credentials: 'include'
        }).then(res => res.json());
    },

    getById(id) {
        return request.get(`category/${id}`);
    },

    edit(id, name) {
        return request.put(`category/${id}`, {name});
    },

    delete(id) {
        return request.delete(`category/${id}`);
    }
};

export default categoryService;