import { User } from "../types/models.ts";
import { URL_USER } from "./constants.ts"

export const createUser = async (user: FormData): Promise<User | never>=>{
    const response = await fetch(URL_USER.CREATE, {
        method: "POST",
        body: user
    });
    const {result, message} : {result: User, message: string} = await response.json();

    if(!response.ok){
        throw new Error (`${message}`);
    }
    return result;
}

export const updateUser = async (accessToken: string, user: FormData): Promise<User | never>=>{
    const response = await fetch(URL_USER.UPDATE, {
        method: "PUT",
        headers: {
            authorization: `Bearer ${accessToken}`
        },
        body: user   
    });

    const {result, message} : {result: User, message: string} =await response.json();

    if(response.status === 401){
        throw new Error(`Token expirado ${message}`);
    }
    return result;
}

export const findUserData = async (accessToken: string) : Promise<User| never>=>{
    const response = await fetch(URL_USER.FIND_INFO, {
        method: "GET",
        headers: {
            authorization: `Bearer ${accessToken}`
        }
    });

    const {result, message} : {result: User, message: string} = await response.json();

    if(response.status === 401){
        throw new Error(`Token expirado: ${message}`);
    }
    return result;
}

export const findUsers = async (accessToken: string, page: number, limit: number): Promise<User[] | never> =>{
    const response = await fetch(URL_USER.FIND(page, limit),{
        method: "GET",
        headers: {
            authorization: `Bearer ${accessToken}`
        }
    });

    const {result, message} : {result: User[], message: string} = await response.json();

    if(response.status === 401){
        throw new Error(`Token expirado: ${message}`);
    }
    return result;
}

export const findUserName = async (accessToken: string, name: string): Promise<User[] | never>=>{
    const response = await fetch(URL_USER.FIND_NAME(name), {
        method: "GET",
        headers: {
            authorization: `Bearer ${accessToken}`
        }
    });

    const {result, message}: {result: User[], message: string} = await response.json();

    if(response.status === 401){
        throw new Error(`Token expirado: ${message}`);
    }
    return result;
}

export const deleteUserId = async (accessToken: string): Promise<User | never> =>{
    const response = await fetch(URL_USER.DELETE, {
        method: "DELETE",
        headers: {
            authorization: `Bearer ${accessToken}`
        }
    });

    const {result, message} = await response.json();

    if(response.status === 401){
        throw new Error(`Token expirado: ${message}`);
    }
    return result[0];
}
