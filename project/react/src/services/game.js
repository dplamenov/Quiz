import config from '../config/index';

const gameService = {
    storeGame(data) {
        return fetch(`${config.apiUrl}game`, {
            method: 'post', body: JSON.stringify(data), credentials: 'include', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());
    }

};

export default gameService;