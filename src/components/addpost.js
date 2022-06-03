import React,{useContext,useState} from 'react';
import { UserContext } from '../App';
import './styles/home.css';
import './styles/addpost.css';
import { FaSearch } from "react-icons/fa";
import { RiMenu5Fill } from "react-icons/ri";
import {FaUserCircle} from "react-icons/fa";
import {IoIosNotifications} from "react-icons/io"
import {MdHorizontalRule} from "react-icons/md"
import {IoMdAddCircle} from "react-icons/io"
import {IoMdSettings} from "react-icons/io"
import {AiFillHome} from "react-icons/ai"
import {BsTelephoneFill} from "react-icons/bs"
import {BiMessageSquareDetail} from "react-icons/bi"
import {BiNews} from "react-icons/bi"
import {AiFillLike} from "react-icons/ai"
import {FaCommentAlt} from "react-icons/fa"
import {AiFillRobot} from "react-icons/ai"
import {useHistory} from 'react-router-dom'
import ToggleSwitch from './toggleswitch'
import { addpost } from '../firebase';

export const AddPost =()=>{
    const history = useHistory()
    const [search, setSearch] = useState("");
    const [open, setOpen] = useState(false);
    const [style, setStyle] = useState({height:"300px", justifyContent:"space-evenly"})
    const {state,dispatch} = useContext(UserContext);
    const [story, setStory] = useState("");
    const [anonymous, setAnonymous] = useState(false);

    function clickHandler(){
        if(!open){
        setStyle({height:"300px", justifyContent:"space-evenly", width:"120px"})
        setOpen(true);
        }
        else{
        setStyle({height:"300px", justifyContent:"space-evenly"})
        setOpen(false);
        }
    }

    function submitHandler(e){

        e.preventDefault();

        var post = {
                text:story,
                anonymous: anonymous,
                state:state
            }
        console.log(post);
        if(addpost(post)){
            history.push('/');
        }
    }

    function navigate(location){
        if(location == "addpost"){
            history.push('/addpost');
        }
        if(location == "home"){
            history.push('/');
        }
        if(location == "setting"){
            history.push('/setting');
        }
        if(location == "talk"){
            history.push('/talk');
        }  
    }

    const messages=[];

    for(var i=0; i<2; i++){
        messages.push(
            <>
            <div style={{display:"flex", flexDirection:"row", alignItems:"center", marginTop:"4%", cursor:"pointer"}}>
                <img className='userImg'  src={require("./images/u1.jpg")}  />    
                    <p>Stephen Hawkins</p>  
            </div>
            <p style={{marginLeft:"16%" , fontSize:"13px" ,transform: "translateY(-50%)"}}>Hey, can tell me about progress of project? I'm waiting for your response.</p>
            <hr/>
            <div style={{display:"flex", flexDirection:"row", alignItems:"center", marginTop:"4%", cursor:"pointer"}}>
                <img className='userImg'  src={require("./images/u2.jpg")}  />    
                    <p>Mark Robbins</p>  
            </div>
            <p style={{marginLeft:"16%" , fontSize:"13px" ,transform: "translateY(-50%)"}}>Hey, can tell me about progress of project? I'm waiting for your response.</p>
            <hr/>
            <div style={{display:"flex", flexDirection:"row", alignItems:"center", marginTop:"4%", cursor:"pointer"}}>
                <img className='userImg'  src={require("./images/u3.jpg")}  />    
                    <p>Riha Alttery</p>  
            </div>
            <p style={{marginLeft:"16%" , fontSize:"13px" ,transform: "translateY(-50%)"}}>Hey, can tell me about progress of project? I'm waiting for your response.</p>
            <hr/>
            <div style={{display:"flex", flexDirection:"row", alignItems:"center", marginTop:"4%", cursor:"pointer"}}>
                <img className='userImg'  src={require("./images/u2.jpg")}  />    
                    <p>Anonymus</p>  
            </div>
            <p style={{marginLeft:"16%" , fontSize:"13px" ,transform: "translateY(-50%)"}}>Hey, can tell me about progress of project? I'm waiting for your response.</p>
            <hr/>
            </>
        )
    }

    return (
        <>
         <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyItems:'center'}}>
            <RiMenu5Fill onClick={clickHandler} className='menuIcon'/>
            <h2 style={{color:'white'}}>Project</h2>
            <div className='searchbox'>
            <input className='searchbar'  type="text" placeholder='search' value={search} onChange={(e)=>setSearch(e.target.value)}/>
            <FaSearch/>
            </div>
            <div classname="leftHeader" style={{width:"60%", display:"flex", flexDirection:"row-reverse",  alignItems:'center', justifyItems:'center',marginRight:"2%" }}>
            
            <p className='userName'> {state&&state.name}</p>
            <FaUserCircle className='userIcon'/>
            <MdHorizontalRule className='lineIcon' />
            <IoIosNotifications className='notificationIcon'/>
            {/* <IoMdAddCircle className='addIcon'/>
            <IoMdSettings className='settingIcon'/> */}
            </div>
        </div>
        <div style={{display:"flex", flexDirection:"row", alignItems:'center'}}>
         <div id='slimsnav' className='sidenav' style={style}>
            <p  className='icon sidenav-p' onClick={()=>navigate("home")} ><AiFillHome/> <span  style={{fontSize:"20px", position:"relative", top:"-15%"}}> {open?"Home":""} </span> </p>
            <p  className='icon sidenav-p' onClick={()=>navigate("talk")} ><BsTelephoneFill style={{fontSize:"24px"}} /> <span  style={{fontSize:"20px", position:"relative", top:"-15%"}}> {open?"Talk":""} </span> </p>
            <p  className='icon-active sidenav-p' onClick={()=>navigate("addpost")} ><IoMdAddCircle /> <span  style={{fontSize:"20px", position:"relative", top:"-15%"}}> {open?"Post":""} </span> </p>
            <p  className='icon sidenav-p' onClick={()=>navigate("setting")} ><IoMdSettings /> <span  style={{fontSize:"20px", position:"relative", top:"-15%"}}> {open?"Setting":""} </span> </p>
         </div>
         
         <div className='feed'>
            <p className='heading' style={{letterSpacing:"2px", textAlign:"center"}}>Your Story <BiNews/></p>
            <form>
                <div className="user-box">
                <textarea rows={20} cols={100} type="text"
                style={{marginLeft:"10%",marginRight:"12%"}}
                value={story}
                onChange={(e)=>setStory(e.target.value)}
                required="True"/>
                </div>
                <ToggleSwitch label="Share Anonymous" setAnonymous={setAnonymous} anonymous={anonymous} />
                <div style={{textAlign:"center", marginTop:"5%"}} >
                <button class="custom-btn btn-12" onClick={(e)=>submitHandler(e)} ><span>Click!</span><span>Share</span></button>
                </div>
            </form>
         </div>

         <div className='messages'>
            <div >
                <p className='heading'>Messages <BiMessageSquareDetail/> <AiFillRobot className='robot-icon'/> </p>
            </div>
            <hr/>

            {messages}
         </div>
         
        </div>
        
        </>
    )
}

