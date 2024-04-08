import React from "react";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth  } from 'firebase/auth';
import app from "../firebase";
import styled from "styled-components";

function SignupPage(){

    const{
        register,
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
    const navigate = useNavigate();
    const onClick = () => {
        navigate("/LogIn");
    }

    return(
        <div style={{textAlign: 'center'}}>
            <Form onSubmit={handleSubmit(onCreateAccount)}>
                    <h1>Sign Up</h1>
                    <Input name="email" type="email" id="email" placeholder="Email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })}/>
                    <Input name="password" type="password" id="password" placeholder="Password"
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
                <Button type="submit">Sign Up</Button>
                <Button onClick={onClick}>Log in</Button>
            </Form>
        </div>
    );
}
const Button = styled.button`
    border-radius: 20px;
    border: 1px solid #2b80ff;
    background-color: #2b80ff;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 35px;
    min-width:60px;
    letter-spacing: 1px;
    text-transform: uppercase;
    &:active {
        transform: scale(0.95);
    }
`
const Input = styled.input`
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    max-width:200px;
    margin: 8px 0;
    width: 100%;
`
const Form = styled.form`
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
`
export default SignupPage;