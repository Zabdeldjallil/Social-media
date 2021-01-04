import React,{useEffect} from 'react'
import {render} from 'react-dom'
require('babel-core/register');
require('babel-polyfill');
import img from "../cutepic.jpeg"
import {Redirect} from "react-router-dom";
import io from "socket.io-client";

   
export default function Conversation({user,socket}){
    useEffect(() => {
        socket.emit("connected");
        socket.on('message',(message,email)=>{
          outPut(message,email);
      })
      }, []);
      function handleMessage(){
        let msg =document.getElementById("msg");
        if(msg.value!==""){
          socket.emit('onMessage',msg.value,user.email);
          msg.value=""
        }
      }
      function outPut(msg,email){
        const elem=document.createElement("div")
        if(email==user.email){
            elem.classList.add("my-message")
            elem.innerHTML=`<div class="my-message-text">
            <p class="message-text">${msg}</p>
           </div>`
        } else{
            elem.classList.add("his-message")
            elem.innerHTML=`<div class="his-message-text">
            <p class="message-text">${msg}</p>
           </div>`
        }
        
            document.querySelector(".conversation").appendChild(elem);
        } 
    {if(JSON.stringify(user)!=JSON.stringify({})) return <>
        <div className="parent">
        <div className="header">
            <div className="gauche">
                <span><a href="/">←</a></span>
            </div>
            <div className="pic-conversation">
                <img src={img} alt=""/>
            </div>
    </div>
        <div className="main">
            <div className="maintain">
                <div className="conversation">
                    <div className="his-message">
                       <div className="his-message-text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, accusantium, voluptatum dignissimos quidem corrupti necessitatibus, voluptas voluptate pariatur eos iusto ipsam expedita quo architecto ipsum non dolor! Eaque, reiciendis minus?</p>
                       </div>
                    </div>
                    <div className="my-message">
                        <div className="my-message-text">
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, accusantium, voluptatum dignissimos quidem corrupti necessitatibus, voluptas voluptate pariatur eos iusto ipsam expedita quo architecto ipsum non dolor! Eaque, reiciendis minus?</p>
                        </div>
                     </div>
                     </div>
                     <hr/>
                     
                    <span className="conversation-send"><textarea name="msg" id="msg" cols="30" rows="10" placeholder="Enter your message here..."></textarea> <button onClick={handleMessage}><strong>➢</strong></button></span>
                  
            </div>
        </div>
    </div>
    </>
    else return  <Redirect from="/conversation" to="/login"/>}
}