import apiClient from "./api-client"

interface Register{
    full_name:string
    email:string
    password:string
}
const BASE_URL="/user/register"
class RegisterService{
    register(details:Register){
        return apiClient.post(BASE_URL,details)
    }
}

export default new RegisterService()