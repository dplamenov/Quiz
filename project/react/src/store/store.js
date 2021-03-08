import React from 'react';
import {ActionTypes, loginSuccess, loginFailure, logoutSuccess, logoutFailure} from './actions';
import userService from '../services/user';

export const StoreContext = React.createContext({});

const initialState = {
    user: undefined,
    error: null
};

function init(state) {
    return initialState;
}

const asyncActionMap = {
    [ActionTypes.Login]:
        ({user, cb}) => {
            return userService.login(user)
                .then(user => {
                    if (user.error) {
                        return Promise.reject('no user');
                    }
                    cb();
                    return loginSuccess(user);
                })
                .catch(error => loginFailure(error));
        },
    [ActionTypes.Logout]:
        ({cb}) => userService.logout()
            .then((data) => {
                cb();
                return logoutSuccess();
            })
            .catch(error => logoutFailure(error))
}

const actionMap = {
    [ActionTypes.Login]: (state) => ({...state, error: null}),
    [ActionTypes.LoginSuccess]: (state, {user}) => ({...state, user}),
    [ActionTypes.LogoutSuccess]: (state) => ({...state, user: null}),
    [ActionTypes.LoginFailure]: (state, {error}) => ({...state, error})
}

const storeReducer = (state, action) => {
    const handler = actionMap[action.type];
    return handler ? handler(state, action.payload) : state;
}

const Store = ({children}) => {
    const [state, dispatch] = React.useReducer(storeReducer, initialState, init);

    const store = React.useMemo(() => ({
        state,
        dispatch: (action) => {
            const asyncActionHandler = asyncActionMap[action.type];
            if (asyncActionHandler) {
                asyncActionHandler(action.payload).then(dispatch);
            }
            dispatch(action);
        }
    }), [state, dispatch]);

    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
};

export default Store;