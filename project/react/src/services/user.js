import config from '../config/index';

const userService = {
    register: function () {

    },

    login: function () {
        return fetch(`${config.apiUrl}user/login`, {method: 'post'})
            .then(res => res.json())
            .then(res => {
                console.log(res);
            });
    },

    logout: function () {

    }
};

export default userService;