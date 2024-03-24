import React from "react";
import { useForm } from 'react-hook-form';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">Email</label>
                <input name="email" type="email" id="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })}/>

                {/* <label htmlFor="name">Name</label>
                <input name="name" type="number" id="name" {...register('age', { min: 12, max: 80 })}/> */}

                <label htmlFor="password">Password</label>
                <input name="password" type="password" id="password" 
                    {...register('password', { required: true, minLength: 6, maxLength: 20, })}/>

                <input type="submit" />
            </form>
        </div>
    );
}

export default LoginPage;