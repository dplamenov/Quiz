import request from "../helper/request";

const MainService = {
    contact(name, from, message) {
        return request.post('contact', {name, from, message});
    }
};

export default MainService;