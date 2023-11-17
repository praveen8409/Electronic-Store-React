//  User releted API calls

import { publicAxios } from "./axios.service"


// Create User
export const registerUser = (userData) =>{
    return publicAxios.post(`/users`, userData).then((Response)=> Response.data);
}


// Login User

export const loginUser = (loginData) =>{
    return publicAxios.post(`/auth/login`, loginData).then((Response)=>Response.data);
}