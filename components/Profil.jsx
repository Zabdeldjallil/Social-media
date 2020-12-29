import React from 'react'
import {render} from 'react-dom'
import { useHistory } from 'react-router-dom';
require('babel-core/register');
require('babel-polyfill');
import img from "../cutepic.jpeg"
import {Redirect} from "react-router-dom";

export default function Profil({user}){
   // if(user) console.log(user)
   const history = useHistory();
    {if(JSON.stringify(user)!=JSON.stringify({}))  return <>
        <div className="parent">
        <div className="header">
            <div className="gauche">
                <span><a href="/">←</a></span>
            </div>
    </div>
        <div className="main">
          <div className="courbe">
            <div className="profilImg">
                <img src={img} alt="not found" />
            </div>
    <div className="profilName">
        <h5>My name</h5>
    </div>
    <div className="profil-items">
        <div className="card-profil-item">
            <span className="item-title">item-title</span> <span className="item-hour"><small>12:05 27/05/2020</small></span>
            <p className="item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum illo perspiciatis eum? Laborum libero atque perspiciatis, suscipit minus est repellendus. Nisi odio expedita velit itaque, dolores vel inventore consequuntur quibusdam?</p>
        </div>
        <div className="card-profil-item">
          <span className="item-title">item-title</span> <span className="item-hour"><small>12:05 27/05/2020</small></span>
          <p className="item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum illo perspiciatis eum? Laborum libero atque perspiciatis, suscipit minus est repellendus. Nisi odio expedita velit itaque, dolores vel inventore consequuntur quibusdam?</p>
      </div>
      <div className="card-profil-item">
        <span className="item-title">item-title</span> <span className="item-hour"><small>12:05 27/05/2020</small></span>
        <p className="item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum illo perspiciatis eum? Laborum libero atque perspiciatis, suscipit minus est repellendus. Nisi odio expedita velit itaque, dolores vel inventore consequuntur quibusdam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis dolores nisi aspernatur vero, sunt esse ratione repellendus! Dolor, ipsam sapiente dolore ex dolorum, accusantium ipsum tenetur et, commodi amet temporibus.</p>
    </div>
    </div>
          </div>
        </div>
    </div>
    </>
else return <Redirect from="/profil" to="/login"/>
}
   
}