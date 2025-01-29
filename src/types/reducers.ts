import { User } from "./models"

export type Auth = {
    isAuthenticated?: boolean,
    accessToken?: string,
    user?: User | undefined,
    isLoading?: boolean
}
export type AuthAction = 
{type: 'UPDATE_AUTH', payload: Auth} 
| {type: 'RESET_AUTH', payload?: Auth}
