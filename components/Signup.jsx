import React from 'react'
import {render} from 'react-dom'
import { useForm } from "react-hook-form";
require('babel-core/register');
require('babel-polyfill');


export default function Signup(){
    const { register, handleSubmit, watch, errors } = useForm();
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
          fetch("http://localhost:8080/signup", requestOptions)
          .then((response) => response.json())
          .then((toto) => {
            if (toto.message === "working!") {
              history.push("/login")
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
         <div className="courbe-signup">
             <div className="signup-form">
                 <span id="connect"><b>Signup</b></span>
                 <form action="/signup" method="post" onSubmit={handleSubmit(onSubmit)}>
                     <label htmlFor="email">Email</label>
                     <input type="email" name="email" id="email" ref={register({ required: true })}/>
                     <label htmlFor="firstname">Firstname</label>
                     <input type="text" name="firstname" ref={register({ required: true })}/>
                     <label htmlFor="lastname">Lastname</label>
                     <input type="text" name="lastname" ref={register({ required: true })}/>
                     <label htmlFor="password">Password</label>
                     <input type="password" name="password" id="password" ref={register({ required: true })}/>
                     <label htmlFor="confirm">Password confirmation</label>
                     <input type="password" name="passwordconfirm" id="passwordconfirm" ref={register({ required: true })}/>
                     <div className="buttons-sign">
                        <button type="submit">Signup</button>
                        <button type="reset">Reset</button>
                     </div>
                </form>
             </div>
         </div>
        </div>
    </div>
    </>
}