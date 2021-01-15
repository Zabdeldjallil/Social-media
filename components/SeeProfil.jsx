import React from 'react'
import {render} from 'react-dom'
import { useHistory,useParams } from 'react-router-dom';
require('babel-core/register');
require('babel-polyfill');
import img from "../cutepic.jpeg"
import {Redirect,Link} from "react-router-dom";
import useAxios from 'axios-hooks'
import ReactLoading from 'react-loading'
export default function Profil({user}){
   
 
   const history = useHistory();
    {if(JSON.stringify(user)!=JSON.stringify({})){
        // if(user) console.log(user)
   const {id}=useParams()
   //console.log(id)
   const [{ data, loading, error }, refetch] = useAxios(
    {
      url:`http://localhost:8080/hisposts/${id}`,
      method:"GET",
      withCredentials:true,   
    }
  )
  if(loading) return <div className='loading'><ReactLoading  type={'bars'} color={'grey'}/></div>
  if(error) return "error"
  return <>
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
{
    data.map((data)=>(
    
    
    <div className="card-profil-item" key={data._id}>
            <span className="item-title">user username</span> <span className="item-hour"><small>12:05 27/05/2020</small></span>
            <p className="item-text">{data.post}</p>
        </div>
    
    )
    )
    }
</div>
    </div>
  </div>
</div>
</>
}  
else return <Redirect from="/seeprofil" to="/login"/>
}
   
}