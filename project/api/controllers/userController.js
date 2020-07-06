module.exports = {
    isLogin(req, res){
        const isLogin = req.session.isLogin || false;
        res.send(JSON.stringify({result: isLogin}));
    },

    login(req, res){

    },

    register(req, res){

    },

    getUserData(req, res){

    }
};