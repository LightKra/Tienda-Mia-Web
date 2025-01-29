import { useEffect, useReducer } from "react";
import { findUserData } from "../services/users.services";
import { getNewAccessToken, logout} from "../services/auth.services";
import { reducerAuth, initialState } from "../reducers/auth.provider.reducer";
import { User } from "../types/models"; 

export const useAuthProvider = ()=>{
    const [state, dispatch] = useReducer(reducerAuth, initialState);

    const checkAuth = async ()=>{
        try {
            const refreshToken = getRefreshToken();
            if(refreshToken){
                const newAccessToken = await getNewAccessToken(refreshToken);
                const userData = await findUserData(newAccessToken);
                saveUserData(userData, newAccessToken, refreshToken);
            }
            dispatch({type: "UPDATE_AUTH",  payload: {isLoading: false}});
        } catch (error) {
            deleteUserData();
        }
    }

    const getAccessToken = ()=>{
        return state.accessToken;
    }
    
    const getRefreshToken = (): string | null =>{
        return JSON.parse(localStorage.getItem("token") || "null");
    }

    const getUser = ()=>{
        return state.user;
    }

    const saveUserData = (user: User, accessTokenData: string, refreshTokenData: string) =>{
        localStorage.setItem("token", JSON.stringify(refreshTokenData));
        dispatch({type: "UPDATE_AUTH", payload: {accessToken: accessTokenData, user: user, isAuthenticated: true}});
    }
    
    const deleteUserData = ()=>{
        dispatch({type: "RESET_AUTH"});
        localStorage.removeItem("token");
    }

    const logoutUser = async ()=>{
        try {
            if(typeof state.accessToken === 'string'){
                await logout(state.accessToken);
            }
            deleteUserData();
        } catch (error) {
            deleteUserData();
        }
    }
    
    useEffect(()=>{
        checkAuth();
    }, []);

    return {
        isAuthenticated: state.isAuthenticated,
        getAccessToken,
        saveUserData,
        getRefreshToken,
        checkAuth,
        deleteUserData,
        getUser,
        isLoading: state.isLoading,
        logoutUser
    }
}