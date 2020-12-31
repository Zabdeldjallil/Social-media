import React, { useState,useEffect } from 'react'
import {render} from 'react-dom'
require('babel-core/register');
require('babel-polyfill');
import "../style.css"
import { useHistory } from 'react-router-dom';

import Signup from "../components/Signup"
import Login from "../components/Login"
//import Conversation from "../components/Conversation"
import Chat from "../components/Chat"
import Conversation from "../components/Conversation"
import Profil from "../components/Profil"
import img from "../cutepic.jpeg"
import {Redirect} from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
  posting: yup.string().required(),
});
export default  function Home({user}){
  const history = useHistory();
  const [posted,setPosted]=useState(false)
  const { register, handleSubmit, watch, errors } = useForm({ resolver: yupResolver(schema),mode:'onSubmit'});
  function onSubmit(data){
    const requestOptions = {
        method: "POST",
        allowed_headers: "Content-Type",
        credentials: "same-origin",
        
        headers: {
          "Access-Control-Allow-Credentials":"true",
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body:JSON.stringify({ data:data,user:user}),
      };
      console.log(requestOptions.body)
      fetch("http://localhost:8080/post", requestOptions)
      .then((response) => response.json())
      .then((toto) => {
        if (toto.message === "working!") {
          setPosted(c=>!c)
           // history.go()
            //window.location.reload();
        } else console.log(toto.message);
      });
}
    {if(JSON.stringify(user)!=JSON.stringify({})) return   <div className="parent">
          
          <div className="header">
              <div className="gauche">
                  <span><a href="/">Main</a></span>
              </div>
              <div className="navbar">
                  <div className="dropdown">
                    <button className="dropbtn">Section1
                      <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                      <a href="/list"> Nav1</a>
                      <a href="/groupe">Nav1</a>
                      <a href="/todo">Nav1</a>
                    </div>
                  </div>
                  <div className="dropdown">
                      <button className="dropbtn">Section2
                        <i className="fa fa-caret-down"></i>
                      </button>
                      <div className="dropdown-content">
                        <a href="/ptodo"> Nav2</a>
                        <a href="/plist">Nav2</a>
                      </div>
                    </div>
          </div>
      </div>
          <div className="main">
            <div className="posting-index">
             {(errors.posting)? errors.posting.message:""}
              <form action="" method="post" className="posting-index"  onSubmit={handleSubmit(onSubmit)}>
              <textarea name="posting" id="posting" cols="30" rows="10" placeholder="What's good boomer ?" ref={register}></textarea>
              <button type="submit" >Share</button>
              </form>
            </div>
            <div className="courbe-index">
              <div className="card-index">
                <div className="head-card-index">
                  <img src={img} alt=""  className="head-card-img"/>
                  <span className="head-card-username">User name</span>
                  <span className="head-card-time"> <small>15:03 21-12-2020</small></span>
                </div>
                <div className="body-card-index">
                  <p className="card-index-content">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, quod vitae placeat dicta, ut dignissimos cumque pariatur ex consectetur rem perspiciatis blanditiis assumenda, repellendus similique libero accusantium quo excepturi est.</p>
                </div>
              </div>
              <div className="card-index">
                <div className="head-card-index">
                  <img src={img} alt=""  className="head-card-img"/>
                  <span className="head-card-username">User name</span>
                  <span className="head-card-time"> <small>15:03 21-12-2020</small></span>
                </div>
                <div className="body-card-index">
                  <p className="card-index-content">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, quod vitae placeat dicta, ut dignissimos cumque pariatur ex consectetur rem perspiciatis blanditiis assumenda, repellendus similique libero accusantium quo excepturi est.</p>
                </div>
              </div>
              <div className="card-index">
                <div className="head-card-index">
                  <img src={img} alt=""  className="head-card-img"/>
                  <span className="head-card-username">User name</span>
                  <span className="head-card-time"> <small>15:03 21-12-2020</small></span>
                </div>
                <div className="body-card-index">
                  <p className="card-index-content">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, quod vitae placeat dicta, ut dignissimos cumque pariatur ex consectetur rem perspiciatis blanditiis assumenda, repellendus similique libero accusantium quo excepturi est.</p>
                </div>
              </div>
            </div>
          </div>
      </div>
else return <Redirect from="/chat" to="/login"/>
    }
  }
