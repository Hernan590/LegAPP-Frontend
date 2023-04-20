import React from "react";
import { useState } from "react";
import "./Formularios.css";
import { useHistory } from 'react-router-dom';
import axios from "axios";


const Formcreartipogasto = () => {
    const history = useHistory();
    const handleRegresar = () => history.push("/gasto");
    const handleClick = () => alert("El gasto ha sido creado con exito");
    const [ tipodegasto, setnombregasto ] = useState("");

    const handlecreargasto = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4500/createSpent', {
           nombreGasto: tipodegasto
        })
        .then(response => {
            //console.log(response.data);
            if(response.data["message"]=="El gasto ha sido insertado"){
              handleClick();
              setnombregasto("");
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
            <h2 className="Titulo1">Crear tipo de gasto</h2>
            <p className="texto">Por favor, ingresar los datos correctamente.</p>
            <div className="inputs-contenedor">
            <form onSubmit={handlecreargasto}>
                <div>
                    <h4 className="Titulo1">Nombre del gasto</h4>
                    <input
                    id="tipodegasto"
                    name="tipodegasto"
                    placeholder="Por favor escribir el nombre"
                    type="text"
                    value={tipodegasto}
                    onChange={(e) => setnombregasto(e.target.value)}
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
export default Formcreartipogasto;