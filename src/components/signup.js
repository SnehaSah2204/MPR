import React,{useState} from 'react';
import './styles/signin.css'
import {useHistory} from 'react-router-dom'
import {createUser} from '../firebase';
export const Signup =()=>{
    const history = useHistory()
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [password, setPassword]=useState();
    const [confirm, setConfirm] = useState();
    async function submitHandler(e){
        e.preventDefault();
        if(!name||!email||!password||!confirm){
            return alert("All fields are required!")
        }
        else if(password!==confirm){
            setPassword("");
            setConfirm("");
            return alert("Password and Confirm password do not match!")
        }
        else if(password.length<8){
            setPassword("");
            setConfirm("");
            return alert("Your password must have 8 characters atleast!")
        }
        else{
            const user = {
                name,
                email,
                password
            };
            await createUser(user);
            history.push("/signin")
        }
        
    }

    return (
        <>
        <div className="login-box">
            <h2>Signup</h2>
            <form>
            <div className="user-box">
                <input
                type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                required="True"/>
                <label>Name</label>
                </div>
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
                <div className="user-box">
                <input type="password" 
                value={confirm}
                onChange={(e)=>setConfirm(e.target.value)}
                required="True"/>
                <label>Confirm Password</label>
                </div>
                <a onClick={submitHandler} >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
                </a>
            </form>
        </div>
        <h5 onClick={()=>history.push('/signin')} style={{color:'white', marginTop:'40%', textAlign:'center', cursor:'pointer'}}>Already have an Account? <span style={{color:'#03e9f4'}}>Signin!</span></h5>
        </>
    )
}