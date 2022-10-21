import React from "react";
import "./inputs.css";

const Inputs = (props) => {
const {label, onChange, errorMessage, id, ...inputprops} = props;
    return (
        <>
            <div className="input">
              <label>{label}</label> 
              <input {...inputprops} onChange={onChange}/>
              <span>{errorMessage}</span>
            </div>
        </>
    )
}

export default Inputs;