import React,{useContext,useState} from 'react';
import { useEffect } from 'react';
import { UserContext } from '../App';
import { VideoSDKMeeting } from "@videosdk.live/rtc-js-prebuilt";

const Videocall = ()=>{
    const {state,dispatch} = useContext(UserContext);

    useEffect(()=>{
        const config = {
            name: state.name,
            meetingId: "milkyway211",
            apiKey: "a32ee84c-0f6d-476e-80bb-5f80c9c46ac6",
      
            containerId: null,
      
            micEnabled: true,
            webcamEnabled: true,
            participantCanToggleSelfWebcam: true,
            participantCanToggleSelfMic: true,
      
            chatEnabled: true,
            screenShareEnabled: true,
      
            /*
      
           Other Feature Properties
            
            */
          };
      
          const meeting = new VideoSDKMeeting();
          meeting.init(config);

    
}
    ,[])

    return(
       <div>

       </div>
    )
}

export default Videocall;