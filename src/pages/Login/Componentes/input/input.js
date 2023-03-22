//Se importan los componentes que se necesitan para el desarrollo
import React, { useState } from "react";
import Label from "../Label/Label";
import Label1 from "../Label/Label1";
import "./input.css";


export default function Input (){
    //Se crean dos variables de tipo "useState" para guardar los valores: Usuario y Password
    const [ Usuario, setUsuario ] = useState("");
    const [ password, setPassword ] = useState("");

    //const handleSubmit = e => {
        //e.preventDefault();
        //alert("Se enviaron los datos");
    //}

    return(
        //Se implementa el formulario del login con sus componentes y diseño
        <div className="inputs-container">
          <form action="http://localhost:4500/getUser" method="POST">
            <div>
                <Label1 text="Email"/>
                <input
                id="Usuario"
                name="email"
                placeholder="Email"
                type="email"
                value={Usuario}
                onChange={(e) => setUsuario(e.target.value)}
                className="regular-style"/>
            </div>
            <div>
                <Label text="Contraseña"/>
                <input
                id="Password"
                name="password"
                placeholder="Contraseña"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="regular-style"/>
            </div>
                <div className="contenedor-boton"> 
                <input
                        type="submit"
                        className="submit-boton"/>
                </div>
            </form>
        </div>
    )
};

