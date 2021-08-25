import { User } from "@common/types/types";
import { USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER, USER_REGISTER_SUCCESS } from "@store/actions/actionAuthTypes";

export const login = (user: User) => { 
    return { type: USER_LOGIN, payload: { user } }
}
export const loginSuccess = (user: User) => {
    return { type: USER_LOGIN_SUCCESS, user }
}

export const register = (user: User) => {
    return { type: USER_REGISTER, payload: { user }}
}
export const registerSuccess = (user: User) => {
    return {type: USER_REGISTER_SUCCESS, user}
}

export const logout = () => ({ type: USER_LOGOUT });