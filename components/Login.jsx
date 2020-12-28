import React from 'react'
import {render} from 'react-dom'
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
require('babel-core/register');
require('babel-polyfill');



export default function Login({setUser}){
    const { register, handleSubmit, watch, errors } = useForm();
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
                setUser("toto")
                history.push("/profil")
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
                 <form action="/signin" method="post" onSubmit={handleSubmit(onSubmit)}>
                     <label htmlFor="email">Email</label>
                     <input type="email" name="email" id="email"  ref={register({ required: true })}/>
                     <label htmlFor="password">Password</label>
                     <input type="password" name="password" id="password"  ref={register({ required: true })}/>
                     <button type="submit">Connect</button>
                </form>
             </div>
         </div>
        </div>
    </div>
    
    </>
}