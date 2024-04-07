import React from "react";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword  } from 'firebase/auth';
import app from "../firebase";

function LoginPage(){

    const{
        register,
        watch,
        formState: {errors},
        handleSubmit,
    } = useForm();

    const auth = getAuth(app);

    const onSubmit = async(data) => {
        try {
            const createUser = await signInWithEmailAndPassword(
                auth,
                data.email,
                data.password,
            );
            console.log("성공");
        } catch (error) {
            console.log(error);
        }
    }

    const navigate = useNavigate();

    const onClick = () => {
        navigate("/SignUp");
    }

    return(
        <div style={{textAlign: 'center'}}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="head">로그인    </label>
                <label htmlFor="email">Email</label>
                <input name="email" type="email" id="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })}/>

                {/* <label htmlFor="name">Name</label>
                <input name="name" type="number" id="name" {...register('age', { min: 12, max: 80 })}/> */}

                <label htmlFor="password">Password</label>
                <input name="password" type="password" id="password" 
                    {...register('password', { required: true, minLength: 6, maxLength: 20, })}/>
                {errors.password && errors.password.type === 'required' && (
                <p>비밀번호를 입력해주세요.</p>
                )}
                {errors.password && errors.password.type === 'minLength' && (
                <p>비밀번호는 최소 6자 이상입니다.</p>
                )}
                {errors.password && errors.password.type === 'maxLength' && (
                <p>비밀번호는 최대 20자 이하입니다.</p>
                )}
            <input type="submit" />
            </form>
            <button onClick={onClick}>SignUp</button>
        </div>
    );
}

export default LoginPage;