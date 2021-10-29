import React, { useState } from 'react';

import { useForm } from "react-hook-form";
import './Login.css'
// import useAuth from '../../hooks/useAuth'
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
const Login = () => {
    const history = useHistory()
    const location = useLocation()
    const redirect_url = location.state?.from || "/"
    const { register, handleSubmit } = useForm();
    const { googleSignin, manulaySignin, setIsLoading, setUser } =  useAuth()
    const [result, setResult] = useState("");
    const signInwithGoogle = () => {
        setIsLoading(false)
        googleSignin()
            .then(res => {
                console.log(res.user)
                setUser(res.user)
                history.push(redirect_url)
            })
    }
    const onSubmit = (data) => {
        setIsLoading(false)
        manulaySignin(data.email, data.password)
            .then(res => {
                setUser(res.user)
                history.push(redirect_url)

            })
    };
    return (
        <div className="login-container">
            <h1>Please Login</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("email")} placeholder=" email" />
                <input {...register("password")} placeholder=" password" /> <br />
                <input type="submit" />
            </form>
            <div>--------or---------</div>
            <button onClick={signInwithGoogle} type="button" className="btn btn-outline-primary">GoogleSignIn</button>


        </div>
    );
};

export default Login;