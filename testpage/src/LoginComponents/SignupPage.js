import React from "react";
import { useForm } from 'react-hook-form';
import { createUserWithEmailAndPassword, getAuth  } from 'firebase/auth';
import app from "../firebase";


function SignupPage(){

    const{
        register,
        watch,
        formState: {errors},
        handleSubmit,
    } = useForm();

    const auth = getAuth(app);

    const onCreateAccount = async(data) => {
        try {
            const createUser = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password,
            );
            console.log(createUser);
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div style={{textAlign: 'center'}}>
            <form onSubmit={handleSubmit(onCreateAccount)}>
                    <label htmlFor="head">회원가입    </label>
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
        </div>
    );
}

export default SignupPage;