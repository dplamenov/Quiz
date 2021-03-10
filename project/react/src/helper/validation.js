const emailPattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi;

const validationsMapWithoutParams = {
    email: emailPattern
}

const validationsMapWithParams = {
    'min': (param) => {
        return new RegExp(`.{${param},}`);
    }
};

function validationHandler(setError, validations = {}) {
    return ({target}) => {
        for (const validation of Object.entries(validations)) {
            if (validationsMapWithoutParams.hasOwnProperty(validation[0])) {
                const error = validation[1];
                const v = target.value.trim().match(validationsMapWithoutParams[validation[0]]);
                if (!v) {
                    setError((state) => ({...state, [error]: true}));
                    target.classList.add('error');
                } else {
                    setError((state) => ({...state, [error]: false}));
                    target.classList.remove('error');
                }
            } else if (validationsMapWithParams.hasOwnProperty(validation[0])) {
                const [param, error] = validation[1];
                const regexFn = validationsMapWithParams[validation[0]];
                const v = target.value.trim().match(regexFn(param));
                if (!v) {
                    target.classList.add('error');
                    setError((state) => ({...state, [error]: true}));
                } else {
                    target.classList.remove('error');
                    setError((state) => ({...state, [error]: false}));
                }
            }
        }
    }
}

export default validationHandler;