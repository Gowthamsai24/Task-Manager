import {useContext,useEffect}  from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

export const useUserAuth = ()=>{
 const{user,loading,clearUser}=useContext(UserContext);
    const navigate=useNavigate();
    useEffect(()=>{
        if(loading) return;//Wait until loading finishes
        if(user) return;//User is authenticated
        //User not authenticated, redirect to login
        if(!user){
            clearUser();
            navigate("/login");
        }
    },[user,loading,navigate,clearUser]);

};