import request from "../helper/request";

const AdminService = {
    getAllUsers() {
        return request.get(`admin/users`);
    },

    getAllCategories() {
        return request.get('admin/categories');
    },

    getAllQuestions() {
        return request.get('admin/questions')
    },

    getData() {
        return request.get('admin');
    }
};

export default AdminService;