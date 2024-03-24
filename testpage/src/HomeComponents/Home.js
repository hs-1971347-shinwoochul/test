import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import app from "../firebase";

export default function Home(){
    const auth = getAuth(app);
    const navigate = useNavigate();
    
    const onLogout = () =>{
        signOut(auth)
        .then(() => {console.log("logout");})
        .catch((error)=>{console.log(error);})
        navigate('/Login');
    }
    return (
        <div>
            <h1>Home</h1>
            <button onClick={onLogout}>logout</button>
        </div>
    )
}