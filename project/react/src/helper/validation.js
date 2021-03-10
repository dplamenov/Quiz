const emailPattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi;

const validationsMapWithoutParams = {
    email: emailPattern
}

const validationsMapWithParams = {
    'min': (param) => {
        return new RegExp(`.{${param},}`);
    }
};

function setValidationResult(result, target, error, setError) {
    if (!result) {
        target.classList.add('error');
        setError((state) => ({...state, [error]: true}));
    } else {
        target.classList.remove('error');
        setError((state) => ({...state, [error]: false}));
    }
}

function validationHandler(setError, validations = {}) {
    return ({target}) => {
        for (const validation of Object.entries(validations)) {
            const validationName = validation[0];
            const value = target.value.trim();

            if (validationsMapWithoutParams.hasOwnProperty(validationName)) {
                const error = validation[1];
                const result = value.match(validationsMapWithoutParams[validation[0]]);

                setValidationResult(result, target, error, setError);
            } else if (validationsMapWithParams.hasOwnProperty(validationName)) {
                const [param, error] = validation[1];
                const regexFn = validationsMapWithParams[validation[0]];
                const result = value.match(regexFn(param));

                setValidationResult(result, target, error, setError);
            }
        }
    }
}

export default validationHandler;