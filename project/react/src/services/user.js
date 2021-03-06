import config from '../config/index';

const userService = {
    register: function () {

    },

    login: function () {
        fetch(`${config.apiUrl}user/register`)
            .then(res => res.json())
            .then(res => {
                console.log(res);
            });
    },

    logout: function () {

    }
};

export default userService;