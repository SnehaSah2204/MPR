import React from "react";
import "./styles/ToggleSwitch.css";
  
const ToggleSwitch = ({ label,setAnonymous,anonymous }) => {
  return (
    <div className="container">
      {label}{" "}
      <div className="toggle-switch">
        <input type="checkbox" onChange={(e)=>setAnonymous(!anonymous)} className="checkbox" 
               name={label} id={label} />
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};
  
export default ToggleSwitch;