import React, { useContext, useEffect, useState } from "react";
import './Styling/login.css';
import { currentFetch } from "./App";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
function Login({dispatch,user:{user}})
{
 const load=useContext(currentFetch)
 const navigate = useNavigate()
const [input,setinput]=useState({username:'',password:''})
const [msg,setmsg]=useState(null)
function tryLogin(ev)
{
    load(true)
    ev.preventDefault();
    fetch('https://flavour-backend.vercel.app/login',{
        method:'post',
        mode:'cors',
        headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(input)
    }).then(res=>res.json())
    .then((data)=>{
        if(data.message=='success')
        {
            console.log(data)
          dispatch({type:'UPDATE_USER',payload:data.user})
        }
        else
        {
           setmsg(data.message)
        }
        load(false)
    })
    ev.target.reset();
}
 
    return(
        <div id='login'>
<h3>flavour</h3>
<h4>Sign in to flavour</h4>
<form onSubmit={(e)=>{tryLogin(e)}}>
<p><input type="text" name="login" placeholder="username" required onChange={(e)=>{setinput({...input,username:e.target.value})}}/></p>
<p><input type="password" name="login" placeholder="password" required onChange={(e)=>{setinput({...input,password:e.target.value})}}/></p>
{msg && <p id='errorMsg'>{msg}</p>}
<button >Submit</button>
</form>
  <p style={{marginTop:'9vh'}}><Link to={'/register'}>Click to register</Link></p> 
        </div>
    )
}
export default connect((store)=>{return store})(Login)