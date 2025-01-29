import {URL_AUTH} from './constants'
import { User } from '../types/models';

export const login = async (userLogin: FormData): Promise<[{user: User}, {token: string}, {refreshToken: string}] | never>=>{
    const response = await fetch(URL_AUTH.LOGIN, {
        method: "POST",
        body: userLogin
    });

    const {result, message} : {result: [{user: User}, {token: string}, {refreshToken: string}], message: string} = await response.json();

    if(!response.ok){
        throw new Error(message)
    }
    return result;
}

export const logout = async (accessToken: string): Promise<string | never>=>{
    const response = await fetch(URL_AUTH.LOGOUT, {
        method: "DELETE",
        headers: {
            "authorization": `Bearer ${accessToken}`
        }
    });
    const {message} : {message: string} = await response.json();

    if(response.status === 401){
        throw new Error(`Token expirado: ${message}`);
    }
    return message;
}

export const getNewAccessToken = async (refreshToken: string): Promise<string | never>=>{
    const response = await fetch(URL_AUTH.GET_ACCESS_TOKEN,{
        method: "GET",
        headers: {
            "refreshtoken": `Bearer ${refreshToken}`
        }
    });
    const {result, message}: {result: [{token: string}], message: string} = await response.json();

    //identificar cuando el refresh token no es valido, atraves del codigo de estado
    if(response.status === 401){
        throw new Error(`Token expirado: ${message}`);
    }
    return result[0].token;
}