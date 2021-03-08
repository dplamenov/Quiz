export const ActionTypes = {
    Login: Symbol("[AUTH] Login"),
    LoginSuccess: Symbol("[AUTH] Login Success"),
    LoginFailure: Symbol("[AUTH] Login Failure"),

    Logout: Symbol("[AUTH] Logout"),
    LogoutSuccess: Symbol("[AUTH] Logout Success"),
    LogoutFailure: Symbol("[AUTH] Logout Failure")
};

export const login = (user, cb) => ({type: ActionTypes.Login, payload: {user, cb}});
export const loginFailure = (error) => ({type: ActionTypes.LoginFailure, payload: {error}});
export const loginSuccess = (user) => ({type: ActionTypes.LoginSuccess, payload: {user}});

export const logout = (cb) => ({type: ActionTypes.Logout, payload: {cb}});
export const logoutFailure = (error) => ({type: ActionTypes.LogoutFailure, payload: {error}});
export const logoutSuccess = () => ({type: ActionTypes.LogoutSuccess, payload: undefined});