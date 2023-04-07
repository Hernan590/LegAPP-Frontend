import React from "react";
import { useState } from "react";
import "./Formularios.css";
import { useHistory } from 'react-router-dom';
import axios from "axios";


const Formcrearusuario = () => {
    const history = useHistory();
    const handleRegresar = () => history.push("/usuario");
    const handleClick = () => alert("El usuario ha sido creado con exito");
    const [ idrol, setidrol ] = useState("");
    const [ nombre, setnombre ] = useState("");
    const [ email, setemail ] = useState("");
    const [ password, setpassword ] = useState("");


    const handlecrearusuario = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4500/createUser', {
          idRol: idrol,
          nombre: nombre,
          email: email,
          password: password
        })
        .then(response => {
          //console.log(response.data);
          if(response.data["message"]=="Usuario creado"){
            handleClick();
          }
          // manejar la respuesta exitosa aquí
        })
        .catch(error => {
          console.log(error);
          // manejar el error aquí
        });
      };


    return (
        <>
        <div className="formulario-contenedor"> 
            <h2 className="Titulo1">Crear Usuario</h2>
            <p className="texto">Por favor, ingresar los datos correctamente.</p>
            <div className="inputs-contenedor">
            <form onSubmit={handlecrearusuario}>
                <div>
                    <h4 className="Titulo1">id-Rol</h4>
                    <p className="textoad">Por favor, solo digitar 1 si es legilizador, o 2 para administrador</p>
                    <input
                    id="idrol"
                    name="idrol"
                    placeholder="Escribir el rol"
                    type="text"
                    value={idrol}
                    onChange={(e) => setidrol(e.target.value)}
                    className="regular-style"/>
                </div>
                <div>
                    <h4 className="Titulo1">Nombre</h4>
                    <input
                    id="nombre"
                    name="nombre"
                    placeholder="Escribir un nombre"
                    type="text"
                    value={nombre}
                    onChange={(e) => setnombre(e.target.value)}
                    className="regular-style"/>
                </div>
                <div>
                    <h4 className="Titulo1">Correo</h4>
                    <input
                    id="email"
                    name="email"
                    placeholder="Escribir un correo electronico"
                    type="email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    className="regular-style"/>
                </div>
                <div>
                    <h4 className="Titulo1">Contraseña</h4>
                    <input
                    id="contraseña"
                    name="contraseña"
                    placeholder="Escribir una contraseña"
                    type="password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    className="regular-style"/>
                </div>
                    <div className="contenedor-enviar"> 
                    <button
                        type="submit"
                        className="submit-boton" onClick={handleRegresar}>Regresar</button>
                    <button
                        type="submit"
                        className="submit-boton1">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )    
};
export default Formcrearusuario;