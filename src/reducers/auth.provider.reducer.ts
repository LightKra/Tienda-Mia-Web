import { Auth, AuthAction } from "../types/reducers";

export const initialState = {
    isAuthenticated: false,
    accessToken: "",
    user: undefined,
    isLoading: true
}

export const reducerAuth = (state: Auth, action: AuthAction)=>{
    const {type, payload} = action;
    switch(type){
        case "UPDATE_AUTH" :
            return {
                ...state,
                ...payload
            }
        case "RESET_AUTH" :
                return {
                    ...initialState,
                    isLoading: false
                };
        default :
                return state;
    }
}