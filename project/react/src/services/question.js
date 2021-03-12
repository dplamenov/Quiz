import config from '../config/index';

const questionService = {
    getQuestion(catId) {
        return fetch(`${config.apiUrl}question?cat=${catId}`)
            .then(res => res.json());
    }
};

export default questionService;