import React from 'react'
import {render} from 'react-dom'
require('babel-core/register');
require('babel-polyfill');
import img from "../cutepic.jpeg"
import {Redirect} from "react-router-dom";


export default function Conversation({user}){
    {if (user)return <>
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
                     <hr/>
                    <span className="conversation-send"><textarea name="msg" id="" cols="30" rows="10" placeholder="Enter your message here..."></textarea> <button><strong>➢</strong></button></span>
                  </div>
            </div>
        </div>
    </div>
    </>
    else return  <Redirect from="/conversation" to="/login"/>}
}