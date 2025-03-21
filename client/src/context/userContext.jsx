import { createContext, useEffect,useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({children})=>{
    const [userData, setUserData] = useState();
    const [token, setToken] = useState(localStorage.getItem("token"));

    useEffect(()=>{
        localStorage.setItem("token", token);
    },[token, userData]);
    
    return <UserContext.Provider value={{setUserData, setToken, token, userData}}>
        {children}
    </UserContext.Provider>
}