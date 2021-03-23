import request from "../helper/request";

const userService = {
    register: function (data) {
        return request.post('user/register', data);
    },

    login: function (data) {
        return request.post('user/login', data);
    },

    logout: function () {
        return request.get('user/logout');
    },

    addPoints: function (points) {
        return request.post('user/points', {points});
    },

    stats: function (page) {
        return request.get(`user/stats?page=${page}`);
    },

    getFavouriteGame: function (userId) {
        return request.get(`user/favourite?userId=${userId}`);
    }
};

export default userService;