import React,{useState, useContext} from 'react';
import './styles/signin.css'
import {useHistory} from 'react-router-dom'
import { login } from '../firebase';
import { UserContext } from '../App';
export  const Signin =()=>{
    const history = useHistory()
    const [email,setEmail]=useState();
    const [password, setPassword]=useState();
    const {state,dispatch} = useContext(UserContext);

    async function submitHandler(e){
        e.preventDefault();
        if(!email||!password){
            return alert("All fields are required!")
        }
        else{
            const user ={
                email,
                password
            };

            const res = await login(user);

            if(res){
                alert('logged in');
                localStorage.setItem("user",JSON.stringify(res));
                dispatch({type:"USER",payload:res})
                history.push('/')
            }
        }
        
    }
    return (
        <>
        <div className="login-box">
            <h2>Login</h2>
            <form>
                <div className="user-box">
                <input type="text" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required="True"/>
                <label>Email</label>
                </div>
                <div className="user-box">
                <input type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required="True"/>
                <label>Password</label>
                </div>
                <a onClick={submitHandler}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
                </a>
            </form>
        </div>
        <h5 onClick={()=>history.push('/signup')} style={{color:'white', marginTop:'35%', textAlign:'center', cursor:'pointer'}}>Don't have an Account? <span style={{color:'#03e9f4'}}>Signup!</span></h5>
        <h5 style={{color:'white',  textAlign:'center', cursor:'pointer'}}>Forgot password? <span style={{color:'#03e9f4'}}>Reset!</span></h5>
        </>
    )
}