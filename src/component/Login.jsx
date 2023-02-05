import React, { useState } from 'react'
import "./login.css"
import {FaGoogle ,FaFacebook,FaTwitter} from "react-icons/fa"

const Login = () => {

    const[name,setName]=useState("")
    const[password,setPassword]=useState("")
  return (
    <>
    <div className="login-form">
        <div className="login">
        <h2 style={{textAlign:"center" ,marginRight:"20px"}}>LOGIN</h2>
      
     <input description="Username" placeholder="Enter your username" type="text" className='username' value={name}
     onChange={(e)=>{
          setName(e.target.value)
     }} />
     <input description="Password" placeholder="Enter your password" type="password" className='password' value={password
    }  onChange={(e)=>{
        setPassword(e.target.value)
    }} />
    <button title="Log in" className='loginbtn'>Log IN</button>
    
     
     <div>
     
     <h5>or sign in with</h5>
     <div className="login-logo">
        <FaGoogle size={25} style={{color:"red" ,cursor:"pointer"}}> </FaGoogle>
        <FaFacebook size={25} style={{color:"#6e3dff",cursor:"pointer"}}></FaFacebook>
        <FaTwitter size={25} style={{color:"aqua",cursor:"pointer"}}></FaTwitter>
     </div>
     </div>
     
   </div>
   </div>
    
    </>
  )
}

export default Login