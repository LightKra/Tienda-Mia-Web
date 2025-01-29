import { User } from "./models"

export type AuthContextType = {
    isAuthenticated: boolean | undefined,
    getAccessToken: ()=> string | undefined,
    saveUserData: (user: User, accessToken: string, refreshToken: string)=> void,
    getRefreshToken: ()=> string | null,
    checkAuth: ()=>Promise<void>,
    deleteUserData: ()=> void,
    getUser: ()=> User | undefined,
    isLoading?: ()=>Boolean,
    logoutUser: ()=> Promise<void>
}