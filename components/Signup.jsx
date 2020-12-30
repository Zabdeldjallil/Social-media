import React,{useState} from 'react'
import {render} from 'react-dom'
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
require('babel-core/register');
require('babel-polyfill');

const schema = yup.object().shape({
  email: yup.string().email().required(),
  firstname: yup.string().min(3).required(),
  lastname:yup.string().min(3).required(),
  password:yup.string().min(8).required(),
  passwordconfirmation:yup.string().min(8).required()
});
export default function Signup(){
  const [error,setErr]=useState('')
  const history = useHistory();
    const { register, handleSubmit, watch, errors } = useForm({ resolver: yupResolver(schema),mode:'onBlur'});
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
                          <h3 className='wrong-connection'>{error}</h3>
                         
                 <form action="/signup" method="post" onSubmit={handleSubmit(onSubmit)}>
                   {errors.email ? errors.email.message:""}
                     <label htmlFor="email">Email</label>
                     <input type="email" name="email" id="email" ref={register}/>
                     {errors.firstname ? errors.firstname.message:""} 
                     <label htmlFor="firstname">Firstname</label>
                     <input type="text" name="firstname" ref={register}/>
                     {errors.lastname ? errors.lastname.message:""}
                     <label htmlFor="lastname">Lastname</label>
                     <input type="text" name="lastname" ref={register}/>
                     {errors.password ? errors.password.message:""}
                     <label htmlFor="password">Password</label>
                     <input type="password" name="password" id="password" ref={register}/>
                     {errors.passwordconfirmation ? errors.passwordconfirmation.message:""}
                     <label htmlFor="confirm">Password confirmation</label>
                     <input type="password" name="passwordconfirm" id="passwordconfirm" ref={register}/>
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