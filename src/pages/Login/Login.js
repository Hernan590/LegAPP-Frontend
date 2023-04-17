//Se importan los componentes que se necesitan para el desarrollo
import React, { useState } from "react";
import "./Login.css";
import Title from "./Componentes/Title/Title";
import logousuario from "./Componentes/imagenes/usuario.png";
import Labelbienvenida from "./Componentes/Label/Labelbienvenida";
import Label from "./Componentes/Label/Label";
import Label1 from "./Componentes/Label/Label1";
import { useHistory } from 'react-router-dom';
import axios from "axios";

export default function Login (){
    const [ Usuario, setUsuario ] = useState("");
    const [ password, setPassword ] = useState("");
    const history = useHistory();
    const handleClick = () => history.push("/menu");
    const handleClick1 = () => history.push("/usuarionoexiste");

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4500/getUser', {
          email: Usuario,
          password: password
        })
        .then(response => {
          //console.log(response.data);
          if(response.data["message"]=="user Administrador found"){
            handleClick();
          }
          // manejar la respuesta exitosa aquí
        })
        .catch(error => {
          console.log(error);
         // manejar el error aquí
        });
      };


    return(
        <div className="login-container">
            <div className='logousuario-contenedor'>
                <img 
                    src={logousuario} 
                    className="usuario-logo" 
                />
            </div>    
            <Title text="Iniciar Sesion"/>
            <Labelbienvenida text={<p> Bienvenido a <strong>legAPP</strong></p>}/>
            <div className="inputs-container">
            <form onSubmit={handleLogin}>
                <div className="input1">
                    <Label1 text="Email"/>
                    <input
                    id="Usuario"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={Usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    className="regular-style1"/>
                </div>
                <div className="input2">
                    <Label text="Contraseña"/>
                    <input
                    id="Password"
                    name="password"
                    placeholder="Contraseña"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="regular-style1"/>
                </div>
                    <div className="contenedor-boton"> 
                    <button
                        type="submit"
                        className="boton-iniciar">Iniciar</button>
                    </div>
                </form>
            </div>
        </div>
    )
};
