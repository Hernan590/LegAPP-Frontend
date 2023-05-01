import React from "react";
import { useState } from "react";
import "./Formularios.css";
import { useHistory } from 'react-router-dom';
import axios from "axios";


const Forminactivarusuario = () => {
    const history = useHistory();
    const handleRegresar = () => history.push("/usuario");
    const handlealerta = () => alert("Se modifico el estado");
    const [ state, setState ] = useState("");
    const [ email, setemail ] = useState("");


    const handleSelect = (e) =>{
        const option = e.target.value;
        console.log(option);
        setState(option);
     }

    const handleinactivargasto = (e) => {
        e.preventDefault();
        axios.patch('http://localhost:4500/modifyState', {
            email: email,
            estado: state
        })
        .then(response => {
          //console.log(response.data);
          if(response.data["message"]=="state of user modified"){
            handlealerta();
            setemail("");
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
            <h2 className="Titulo1">Inactivar tipo de gasto</h2>
            <p className="texto">Por favor, ingresar el correo del usuario para inactivarlo.</p>
            <div className="inputs-contenedor"></div>
            <form onSubmit={handleinactivargasto}>
            <div>
                <h4 className="Titulo1">Estado</h4>
                <select name="estado" id="estado" onClick={handleSelect} className="style-selector">
                    <option>Seleccione una opcion</option>
                    <option value="0">Inactivar</option>
                    <option value="1">Activar</option>
                </select>
            </div>
            <div>
                <h4 className="Titulo1">Correo del usuario</h4>
                <input
                id="idtipogasto"
                name="idtipogasto"
                placeholder="Escribir el correo"
                type="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
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
        </>
        )    
    };
    
export default Forminactivarusuario;