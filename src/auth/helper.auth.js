

export const doLoginLocalStorage = (data) =>{
    localStorage.setItem("userData", JSON.stringify(data));
};

export const getUserFromLocalStorage = () =>{
    const data = getUserFromLocalStorage();
    if(data !== null){
        return data.user;
    }
    return null;
};

export const isLoggedIn = () =>{
    if(getTokenFromLocalStorage){
        return true;
    }
    return false;
}

export const getTokenFromLocalStorage = () =>{
    const data = getUserFromLocalStorage();
    if(data !== null){
        return data.jwtToken;
    }
    return null;
}

export const getDataFromLocalStorage = () =>{
    const data = localStorage.getItem("userData");
    if(data !== null){
        return JSON.stringify(data);
    }

    return null;
}