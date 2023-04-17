import React from "react";
import { useState } from "react";
import "./Formularios.css";
import { useHistory } from 'react-router-dom';
import axios from "axios";


const Formactualizarusuario = () => {

    const history = useHistory();
    const handleRegresar = () => history.push("/usuario");
    const handlealerta = () => alert("El usuario ha sido actualizado con exito");
    const [ idrol, setidrol ] = useState("");
    const [ nombre, setnombre ] = useState("");
    const [ email, setemail ] = useState("");
    const [ password, setpassword ] = useState("");
    const [ emailanterior, setemailanterior ] = useState("");

    const handleSelect = (e) =>{
        const option = e.target.value;
        console.log(option);
        setidrol(option);
     }

     const handleactualizarusuario = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:4500/updateUser/${emailanterior}`, {
          idRol: idrol,
          nombre: nombre,
          email: email,
          password: password
        })
        .then(response => {
          //console.log(response.data);
          if(response.data["message"]=="Updated User"){
            handlealerta();
            setnombre("");
            setemail("");
            setpassword("");
            setemailanterior("");
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
            <h2 className="Titulo1">Actualizar Usuario</h2>
            <p className="texto">Por favor, ingresar los datos que desea cambiar.</p>
            <div className="inputs-contenedor">
            <form onSubmit={handleactualizarusuario}>
                <div>
                    <h4 className="Titulo1">id-Rol</h4>
                    <select name="idrol" id="idrol" onClick={handleSelect} className="style-selector">
                        <option>Seleccione una opcion</option>
                        <option value="1">Legalizador</option>
                        <option value="2">Administrador</option>
                    </select>
                </div>
                <div>
                    <h4 className="Titulo-contenedor">Correo anterior</h4>
                    <p className="textoad">Este dato es obligatorio.</p>
                    <input
                    id="email"
                    name="email"
                    placeholder="Escribir un correo electronico"
                    type="email"
                    value={emailanterior}
                    onChange={(e) => setemailanterior(e.target.value)}
                    className="regular-style"/>
                </div>
                <div>
                    <h4 className="Titulo1">Correo Nuevo</h4>
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
                    <h4 className="Titulo1">Nombre Nuevo</h4>
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
                    <h4 className="Titulo1">Contraseña Nueva</h4>
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
                        className="submit-boton" onClick={handleRegresar}>Cancelar</button>
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
export default Formactualizarusuario;