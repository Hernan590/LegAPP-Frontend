import React from "react";
import { useState } from "react";
import "./Formularios.css";
import { useHistory } from 'react-router-dom';


const Formcreartipogasto = () => {
    const history = useHistory();
    const handleRegresar = () => history.push("/gasto");


    return (
        <>
        <div className="formulario-contenedor"> 
            <h2 className="Titulo1">Crear tipo de gasto</h2>
            <p className="texto">Por favor, ingresar los datos correctamente.</p>
            <div className="inputs-contenedor">
            <form>
                <div>
                    <h4 className="Titulo1">Nombre del gasto</h4>
                    <input
                    id="nombredelgasto"
                    name="nombredelgasto"
                    placeholder="Por favor escribir el nombre"
                    type="text"
                    //value={nit}
                    //onChange={(e) => setnit(e.target.value)}
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