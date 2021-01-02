import React from 'react'
import {render} from 'react-dom'
require('babel-core/register');
require('babel-polyfill');
import "../style.css"
import img from "../cutepic.jpeg"
import {Redirect} from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios"
import useAxios from 'axios-hooks'
const schema = yup.object().shape({
  posting: yup.string().required(),
});
export default  function Home({user}){
  const { register, handleSubmit, watch, errors } = useForm({ resolver: yupResolver(schema),mode:'onSubmit'});
  function onSubmit(data){
    axios({
      method: "POST",
      url: "http://localhost:8080/post",
      data,
      headers: {
        "Content-Type": "application/json"
      },
      withCredentials:true
    }).then(res => {
      console.log(res.data.message);
      if(res.data.message=="working!"){
       refetch()
      }else{console.log(res.data.message)}
    });
}
  {if(JSON.stringify(user)!=JSON.stringify({})) {
    const [{ data, loading, error }, refetch] = useAxios(
      {
        url:'http://localhost:8080/posts',
        method:"GET",
        withCredentials:true
      }
    )
    if(error) return "Error!"
      if(loading) return "loading..."
      else {return   <div className="parent">
          
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
          {
          data.map((data)=>(
          <div className="card-index">
            <div className="head-card-index">
              <img src={img} alt=""  className="head-card-img"/>
              <span className="head-card-username">User name</span>
              <span className="head-card-time"> <small>15:03 21-12-2020</small></span>
            </div>
            <div className="body-card-index">
              <p className="card-index-content">{data.post}</p>
            </div>
          </div>)
          )
          }
          
        </div>
      </div>
  </div>}
    }
else return <Redirect from="/chat" to="/login"/>
    }
 }