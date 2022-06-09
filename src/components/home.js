import React,{useContext,useEffect,useState} from 'react';
import { UserContext } from '../App';
import './styles/home.css';
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
import { getpost } from '../firebase';

export const Home =()=>{
    const history = useHistory()
    const [search, setSearch] = useState("");
    const [open, setOpen] = useState(false);
    const [style, setStyle] = useState({height:"300px", justifyContent:"space-evenly"})
    const {state,dispatch} = useContext(UserContext);
    const [post,setPost] = useState(null);
    const [likes, setLikes] = useState([]);

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

    const likeHandler=(post)=>{
        if(likes.includes(post.id)){
            setLikes(likes=>likes.filter(id=> id!=post.id))
        }
        else{
            setLikes(likes=>[...likes,post.id])
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

    useEffect(()=>{
        getpost(setPost)
    },[])

    // const likeHandler = (id,item)=>{
        
    //     const list = post;
    //     var newlist = []
    //     console.log("hi")
    //     // list.map(p=>{
    //     //     if(p.id!= id){
    //     //         newlist.push(p)
    //     //     }
    //     // })

    //     console.log(newlist.length);
    // }

    // const posts=[];

    // for (var i = 0; i < 5; i++) {
    //     posts.push(
    //         <>
    //         <div className='post' >
    //             <div>
    //             <div style={{display:"flex", flexDirection:"row", alignItems:"center", marginTop:"4%", cursor:"pointer"}}>
    //                 <img className='userImg' style={{width:"5%"}}  src={require("./images/u3.jpg")}  />    
    //                     <p>Alottery Stone</p>  
    //             </div>
    //             <p style={{margin:"1% 2%"}}>
    //             As an entrepreneur, I strongly believe that books contain eternal wisdom that can be revisited all the time. 
    //             When I re-read a book, I always discover something new that I had missed before.
    //              I have obtained practical advice and examples from these books that have helped me through my entrepreneurial path.
    //             </p>
    //             </div>
    //             <div className='reaction'>
    //                 <div className='reactIconT'>
    //                 <AiFillLike className='icon-r'/>
    //                 </div>
    //                 <div className='reactIconB'>
    //                 <FaCommentAlt className='icon-r'/>
    //                 </div>
    //             </div>
    //         </div>
    //         <div className='post'>
    //             <div>
    //             <div style={{display:"flex", flexDirection:"row", alignItems:"center", marginTop:"4%", cursor:"pointer"}}>
    //                 <img className='userImg' style={{width:"5%"}}  src={require("./images/u2.jpg")}  />    
    //                     <p>Emliy Watson</p>  
    //             </div>
    //             <p style={{margin:"1% 2%"}}>
    //             As an entrepreneur, I strongly believe that books contain eternal wisdom that can be revisited all the time. 
    //             When I re-read a book, I always discover something new that I had missed before.
    //              I have obtained practical advice and examples from these books that have helped me through my entrepreneurial path.
    //             </p>
    //             </div>
    //             <div className='reaction'>
    //                 <div className='reactIconT'>
    //                 <AiFillLike className='icon-r'/>
    //                 </div>
    //                 <div className='reactIconB'>
    //                 <FaCommentAlt className='icon-r'/>
    //                 </div>
    //             </div>
    //         </div>
    //         </>
    //     );
    // }

    

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
    if(post){
        const Lists =[]
        post.map((item,i)=>{
            Lists.push(
                <>
                <div className='post' key={i} >
                <div>
                <div style={{display:"flex", flexDirection:"row", alignItems:"center", marginTop:"4%", cursor:"pointer"}}>
                    <img className='userImg' style={{width:"5%"}}  src={require(`./images/u${(i%3)+1}.jpg`)} />    
                        <p style={{textTransform:"capitalize"}}>{item.postedBy}</p>  
                </div>
                <p style={{margin:"1% 2%"}}>
                {item.text}
                </p>
                </div>
                <div className='reaction'>
                    <div onClick={()=>likeHandler(item)} className='reactIconT'>
                    <AiFillLike  className='icon-r' style={{color:likes.includes(item.id)&&"#03e9f4"}}/>
                    </div>
                    <div className='reactIconB'>
                    <FaCommentAlt className='icon-r'/>
                    </div>
                </div>
                </div>
                </>
            )
        })
    return (
        <>
        <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyItems:'center'}}>
            <RiMenu5Fill onClick={clickHandler} className='menuIcon'/>
            <h2 style={{color:'white'}}>Project</h2>
            <div className='searchbox'>
            <input className='searchbar'  type="text" placeholder='search' value={search} onChange={(e)=>setSearch(e.target.value)}/>
            <FaSearch/>
            </div>
            <div className="leftHeader" style={{width:"60%", display:"flex", flexDirection:"row-reverse",  alignItems:'center', justifyItems:'center',marginRight:"2%" }}>
            
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
            <p  className='icon-active sidenav-p' onClick={()=>navigate("home")} ><AiFillHome/> <span  style={{fontSize:"20px", position:"relative", top:"-15%"}}> {open?"Home":""} </span> </p>
            <p  className='icon sidenav-p' onClick={()=>navigate("talk")} ><BsTelephoneFill style={{fontSize:"24px"}} /> <span  style={{fontSize:"20px", position:"relative", top:"-15%"}}> {open?"Talk":""} </span> </p>
            <p  className='icon sidenav-p' onClick={()=>navigate("addpost")} ><IoMdAddCircle /> <span  style={{fontSize:"20px", position:"relative", top:"-15%"}}> {open?"Post":""} </span> </p>
            <p  className='icon sidenav-p' onClick={()=>navigate("setting")} ><IoMdSettings /> <span  style={{fontSize:"20px", position:"relative", top:"-15%"}}> {open?"Setting":""} </span> </p>
         </div>
         
         <div className='feed'>
            <p className='heading' style={{letterSpacing:"2px"}}>Stories <BiNews/></p>
            <hr/>
            {Lists}
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
    else
    return(
        <>
        <h1>loading...</h1>
        </>
    )
}

