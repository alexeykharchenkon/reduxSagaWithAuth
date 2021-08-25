import { initialAuthState } from "@store/initialAuthState";
import { USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_SUCCESS } from "@store/actions/actionAuthTypes";

export const authReducer = (state: any = initialAuthState, action: any) => {
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
          return {...state, user: action.user, isLogged: true};
        case USER_REGISTER_SUCCESS:
          return {...state, user: action.user, isLogged: true};
        case USER_LOGOUT:
          return {...state, user: null, isLogged: false};
        default: 
          return state;  
    }
}