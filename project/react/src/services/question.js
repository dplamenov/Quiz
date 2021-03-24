import request from "../helper/request";

const questionService = {
    getQuestion(catId) {
        return request.get(`question?cat=${catId}`);
    },

    create(question) {
        return request.post('question', question);
    },

    reportForError(id, userAnswer) {
        return request.post(`question/${id}/report`, {answer: userAnswer});
    },

    getReports() {
        return request.get('question/reports');
    },

    getReport(id) {
        return request.get(`question/report/${id}`);
    },

    deleteReport(id) {
        return request.delete(`question/report/${id}`);
    }
};

export default questionService;