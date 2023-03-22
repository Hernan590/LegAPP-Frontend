import React from "react";
import "./Label.css";

const Label1 = ({ text }) => {
    return(
        <div className="label-cotainer1">
            <label> {text} </label>
        </div>
    )
};

export default Label1;