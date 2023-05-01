import React from "react";
import { useState } from "react";
import "./Formularios.css";
import { useHistory } from 'react-router-dom';
import axios from "axios";

const Formactualizartipogasto = () => {
    
    const history = useHistory();
    const handleRegresar = () => history.push("/gasto");
    const handlealerta = () => alert("El gasto ha sido actualizado con exito");
    const [ id, setid ] = useState("");
    const [ nombreGasto, setnombreGasto ] = useState("");

    const handleactualizargasto = (e) => {
        e.preventDefault();
        const objData = {
            nombreGasto: nombreGasto
        }
        
        for(let element of Object.keys(objData)){
            if(objData[element] === ""){
                delete objData[element];
            }
        }
        axios.patch(`http://localhost:4500/updateSpent`, {
            nombreGasto: objData["nombreGasto"],
        })
        .then(response => {
          //console.log(response.data);
          if(response.data["message"]=="Spent modified"){
            handlealerta();
            setid("");
            setnombreGasto("");
          }
          // manejar la respuesta exitosa aquí
        })
        .catch(error => {
          console.log(error);
          // manejar el error aquí
        });
      };

    return (
        
        <div className="formulario-contenedor"> 
            <h2 className="Titulo1">Actualizar tipo de gasto</h2>
            <p className="texto">Por favor, ingresar los datos que desea cambiar.</p>
            <div className="inputs-contenedor"></div>
            <form onSubmit={handleactualizargasto}>
            <div>
                <h4 className="Titulo1">Id del gasto</h4>
                <input
                id="idtipogasto"
                name="idtipogasto"
                placeholder="Escribir el id"
                type="text"
                value={id}
                onChange={(e) => setid(e.target.value)}
                className="regular-style"/>
            </div>
            <div>
                <h4 className="Titulo1">Nombre Nuevo</h4>
                <input
                id="nombregastomuevo"
                name="nombregastonuevo"
                placeholder="Escribir un nombre nuevo"
                type="text"
                value={nombreGasto}
                onChange={(e) => setnombreGasto(e.target.value)}
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
        )    
};
export default Formactualizartipogasto;