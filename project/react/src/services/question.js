import config from '../config/index';

const questionService = {
    getQuestion(catId) {
        return fetch(`${config.apiUrl}question?cat=${catId}`)
            .then(res => res.json());
    },

    create(question) {
        return fetch(`${config.apiUrl}question`, {
            method: 'POST', body: question,
            credentials: 'include', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());
    }
};

export default questionService;