import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import app from "../firebase";

export default function Home(){
    const auth = getAuth(app);
    const navigate = useNavigate();

    const onLogin = () => {
        navigate('/Login');
    }
    
    const onLogout = () =>{
        signOut(auth)
        .then(() => {console.log("logout");})
        .catch((error)=>{console.log(error);})
        navigate('/Login');
    }

    return (
        <div>
            <h1>Home</h1>
            {!auth.currentUser && <button onClick={onLogin}>logIn</button>}
            {auth.currentUser && <button onClick={onLogout}>logout</button>}
        </div>
    )
}