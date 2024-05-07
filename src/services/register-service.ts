import apiClient from "./api-client"

interface Register{
    username:string
    email:string
    password:string
}
const BASE_URL="/auth/users/"
class RegisterService{
    register(details:Register){
        return apiClient.post(BASE_URL,details)
    }
}

export default new RegisterService()