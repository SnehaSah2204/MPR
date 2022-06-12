import React,{useContext,useState} from 'react';
import { UserContext } from '../App';

const Iframe = ()=>{
    const {state,dispatch} = useContext(UserContext);

    return(
       <div>
        <iframe width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/890ac682-7920-4440-ba53-3768fd98d545"></iframe>
       </div>
    )
}

export default Iframe;