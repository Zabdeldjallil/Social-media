import React, { useState } from 'react'
import {render} from 'react-dom'
require('babel-core/register');
require('babel-polyfill');
import "../style.css"
import Signup from "../components/Signup"
import Login from "../components/Login"
//import Conversation from "../components/Conversation"
import Chat from "../components/Chat"
import Conversation from "../components/Conversation"
import Profil from "../components/Profil"
import img from "../cutepic.jpeg"
import {Redirect} from "react-router-dom";

export default  function Home({user}){
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
              <textarea name="posting" id="posting" cols="30" rows="10" placeholder="What's good boomer ?"></textarea>
              <button type="submit">Share</button>
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
