export const ActionTypes = {
    Login: Symbol("[AUTH] Login"),
    LoginSuccess: Symbol("[AUTH] Login Success"),
    LoginFailure: Symbol("[AUTH] Login Failure"),

    Register: Symbol("[AUTH] Register"),
    RegisterSuccess: Symbol("[AUTH] Register Success"),
    RegisterFailure: Symbol("[AUTH] Register Failure"),

    Logout: Symbol("[AUTH] Logout"),
    LogoutSuccess: Symbol("[AUTH] Logout Success"),
    LogoutFailure: Symbol("[AUTH] Logout Failure"),

    AddPoints: Symbol('[USER] Add Points')
};

export const login = (user, cb, errorCb) => ({type: ActionTypes.Login, payload: {user, cb, errorCb}});
export const loginFailure = (error) => ({type: ActionTypes.LoginFailure, payload: {error}});
export const loginSuccess = (user) => ({type: ActionTypes.LoginSuccess, payload: {user}});

export const register = (data, cb, errorCb) => ({type: ActionTypes.Register, payload: {data, cb, errorCb}});
export const registerFailure = (error) => ({type: ActionTypes.RegisterFailure, payload: {error}});
export const registerSuccess = (data) => ({type: ActionTypes.RegisterFailure, payload: {data}});

export const logout = (cb) => ({type: ActionTypes.Logout, payload: {cb}});
export const logoutFailure = (error) => ({type: ActionTypes.LogoutFailure, payload: {error}});
export const logoutSuccess = () => ({type: ActionTypes.LogoutSuccess, payload: undefined});

export const addPoints = (point) => ({type: ActionTypes.AddPoints, payload: {point}});