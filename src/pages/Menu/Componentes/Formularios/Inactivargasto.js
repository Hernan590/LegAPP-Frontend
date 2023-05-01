import React from "react";
import { useState } from "react";
import "./Formularios.css";
import { useHistory } from 'react-router-dom';
import axios from "axios";


const Forminactivargasto = () => {
    const history = useHistory();
    const handleRegresar = () => history.push("/gasto");
    const handlealerta = () => alert("Se modifico el estado");
    const [ state, setState ] = useState("");
    const [ id, setId ] = useState("");


    const handleSelect = (e) =>{
        const option = e.target.value;
        console.log(option);
        setState(option);
     }

    const handleinactivargasto = (e) => {
        e.preventDefault();
        axios.patch('http://localhost:4500/updateStateSpent', {
            id: id,
            estado: state
        })
        .then(response => {
          //console.log(response.data);
          if(response.data["message"]=="state of spent modified"){
            handlealerta();
            setId("");
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
            <p className="texto">Por favor, ingresar el id para inactivarlo.</p>
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
                <h4 className="Titulo1">Id del gasto</h4>
                <input
                id="idtipogasto"
                name="idtipogasto"
                placeholder="Escribir el id"
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
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
    
export default Forminactivargasto;