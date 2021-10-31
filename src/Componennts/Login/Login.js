import React, { useState } from 'react';
import swal from 'sweetalert';

import { useForm } from "react-hook-form";
import './Login.css'
// import useAuth from '../../hooks/useAuth'
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
const icon = "https://cdn-teams-slug.flaticon.com/google.jpg"
const Login = () => {
    const history = useHistory()
    const location = useLocation()
    const redirect_url = location.state?.from || "/"
    const { register, handleSubmit } = useForm();
    const { googleSignin, manulaySignin, setIsLoading, setUser } =  useAuth()
    const signInwithGoogle = () => {
        setIsLoading(false)
        googleSignin()
            .then(res => {
                console.log(res.user)
                setUser(res.user)
              
                history.push(redirect_url)
            })
    }
 
    return (
       <div className="login-minheight">
            <div className="login-container">
            <button onClick={signInwithGoogle} type="button" className="  loginButton"> 
            <img src={icon}  alt="" />
            Sign In With Google</button>
        </div>
       </div>
    );
};

export default Login;