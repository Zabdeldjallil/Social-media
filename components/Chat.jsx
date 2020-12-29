import React from 'react'
import {render} from 'react-dom'
require('babel-core/register');
require('babel-polyfill');
import img from "../cutepic.jpeg"
import {Redirect} from "react-router-dom";

export default function Chat({user}){
    {if(JSON.stringify(user)!=JSON.stringify({})) return <>
         <div className="parent">
        <div className="header">
            <div className="gauche">
                <span><a href="/">←</a></span>
            </div>
    </div>
        <div className="main">
          <div className="maintain-chat">
            <div className="body-chat">
                <div className="chat-one">
                 <a href="#"><img src={img} alt="" /><span className="chat-one-name">Name username</span> <span><small> 20:20 20/12/2020</small></span></a>
                </div>
                <hr id="chat-hr"/>
                <div className="chat-one">
                <a href="#"><img src={img} alt="" /><span className="chat-one-name">Name username </span> <span><small> 20:20 20/12/2020</small></span></a>
                   </div>
                   <hr id="chat-hr"/>
            </div>
          </div>
        </div>
    </div>
    </>
    else return  <Redirect from="/chat" to="/login"/>}
  }
