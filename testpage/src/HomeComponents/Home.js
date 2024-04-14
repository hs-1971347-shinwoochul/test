import React, {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import app from "../firebase";

export default function Home(){
    const auth = getAuth(app);
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    //로그인 상태 확인, auth.currentUser가 변경 될 때 마다 실행
    useEffect(()=>{
        if(auth.currentUser){//로그인 되었다면 사용자를 상태에 저장
            setUser(auth.currentUser);
        }else{
            setUser(null);
        }
    },[auth.currentUser])

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
            {user && <p>{user.email} 님</p>}
            {!auth.currentUser && <button onClick={onLogin}>logIn</button>}
            {auth.currentUser && <button onClick={onLogout}>logout</button>}
        </div>
    )
}