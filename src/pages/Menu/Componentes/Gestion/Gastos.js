import React from "react";
import "./Forma.css";
import { useHistory } from 'react-router-dom';
import gastos from "../imagenes/gasto.png";
import listargasto from "../imagenes/diverso.png";
import actualizargasto from "../imagenes/Actualizargasto.png";
import eliminar from "../imagenes/eliminar.png";

const Gasto = () => {
    const history = useHistory();
    const handleClick = () => history.push("/menu");
    return (

        <>
        <header className="header1">
            <h1 className="Titulo-inicial" >Bienvenido a gestion de gasto</h1>
        </header>
        <div className="contenedor-texto">
            <p className="texto1">¿Que deseas hacer?</p>
            <p className="texto1">Por favor dar clic en un icono para realizar una accion</p>
        </div>
          <div className="Contenedor-proveedor">
                <div className="Contenedorp1"><h3 className="Titulo1">Crear Gasto</h3>
                <button className="botonprovee"><img src={gastos} className="tamaño_imagen"/></button>
                </div>
                <div className="Contenedorp1"><h3 className="Titulo1">Listar Gasto</h3>
                <button className="botonprovee"><img src={listargasto} className="tamaño_imagen"/></button>
                </div>
                <div className="Contenedorp1"><h3 className="Titulo1">Actualizar Gasto</h3>
                <button className="botonprovee"><img src={actualizargasto} className="tamaño_imagen"/></button>
                </div>
                <div className="Contenedorp1"><h3 className="Titulo1">Inactivar Gasto</h3>
                <button className="botonprovee"><img src={eliminar} className="tamaño_imagen"/></button>
                </div>
            </div>
            <div className="Contenedor-boton-regresar">
                <button className="botonvolver" onClick={handleClick}>Regresar</button>
            </div>
        
        </>
        )    
    };
export default Gasto;