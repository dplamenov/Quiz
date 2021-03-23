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
    }
};

export default AdminService;