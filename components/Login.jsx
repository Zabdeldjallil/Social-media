import React,{useState}from 'react'
import {render} from 'react-dom'
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
require('babel-core/register');
require('babel-polyfill');


const schema = yup.object().shape({
    email: yup.string().email().required(),
    password:yup.string().required(),
  });
export default function Login({setUser}){
    const [error,setErr]=useState("")
    const { register, handleSubmit, watch, errors } = useForm({ resolver: yupResolver(schema),mode:'onBlur'});
    const history = useHistory();
    function onSubmit(data){

        const requestOptions = {
            method: "POST",
            allowed_headers: "Content-Type,Authorization",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(data),
          };
          fetch("http://localhost:8080/signin", requestOptions)
          .then((response) => response.json())
          .then((toto) => {
            if (toto.message === "working!") {
                setUser(toto.connected)
                history.push("/home")
              //setUser(toto.connected);
            } else setErr(toto.message);
          });
    }
    return <>
        <div className="parent">
        <div className="header">
            <div className="gauche">
                <span><a href="/">Main</a></span>
            </div>
    </div>
        <div className="main">
         <div className="courbe-login">
             <div className="login-form">
                 <span id="connect"><b>Signin</b></span>
                 <p className='wrong-connection'>{error}</p>
                 <form action="/signin" method="post" onSubmit={handleSubmit(onSubmit)}>
                      {errors.email ? errors.email.message:""}
                     <label htmlFor="email">Email</label>
                     <input type="email" name="email" id="email"  ref={register}/>
                     {errors.password ? errors.password.message:""}
                     <label htmlFor="password">Password</label>
                     <input type="password" name="password" id="password"  ref={register}/>
                     <button type="submit">Connect</button>
                </form>
             </div>
         </div>
        </div>
    </div>

    </>
}
