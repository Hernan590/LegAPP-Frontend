import React from "react";
import "./Label.css";

const Labelbienvenida = ({ text }) => {
    return(
        <div className="labelbienvenida-cotainer">
            <label> {text} </label>
        </div>
    )
};

export default Labelbienvenida;