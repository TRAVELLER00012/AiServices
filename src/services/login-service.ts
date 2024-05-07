import apiClient from "./api-client"

export interface Login{
    username:string,
    password:string
}
export interface Tokens{refresh:string,access:string}

const BASE_URL = "/auth/jwt/create"
class LoginService{
    login(details:Login){
        return apiClient.post<Tokens>(BASE_URL,details)
    }
}

export default new LoginService