//  User releted API calls

import { publicAxios } from "./axios.service"

export const registerUser = (userData) =>{
    return publicAxios.post(`/users`, userData).then((Response)=> Response.data);
}