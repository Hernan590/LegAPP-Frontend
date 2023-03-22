//Se importan los componentes que se necesitan para el desarrollo
import React from "react";
import "./Login.css";
import Title from "./Componentes/Title/Title";
import Input from "./Componentes/input/input";
import logousuario from "./Componentes/imagenes/usuario.png";
import Labelbienvenida from "./Componentes/Label/Labelbienvenida";

const Login = () => {

    //Se desarrolla el login y se colocan los componentes para el respectivo desarrollo
    //Tambien se le añade una imagen de usuario
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
            <Input/>
        </div>
    )
};

export default Login;