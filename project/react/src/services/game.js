import request from "../helper/request";

const gameService = {
    storeGame(data) {
        return request.post('game', data);
    }
};

export default gameService;