import config from '../config/index';
import request from "../helper/request";

const questionService = {
    getQuestion(catId) {
        return request.get(`question?cat=${catId}`);
    },

    create(question) {
        return request.post('question', question);
    }
};

export default questionService;