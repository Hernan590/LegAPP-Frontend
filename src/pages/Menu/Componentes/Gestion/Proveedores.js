import React from "react";
import "./Forma.css";
import Crearproveedor from "../imagenes/crearpro.png";
import Listar from "../imagenes/Lista.png";
import Actua from "../imagenes/Actualizar.png";
import Inact from "../imagenes/Inactivar.png";
import { useHistory } from 'react-router-dom';

const Proveedor = () => {
    const history = useHistory();
    const handleClick = () => history.push("/menu");
    const handleClick1 = () => history.push("/crearproveedor");

    return (
        <>
        <header className="header1">
            <h1 className="Titulo-inicial" >Bienvenido a gestion de proveedor</h1>
        </header>
        <div className="contenedor-texto">
            <p className="texto1">¿Que deseas hacer?</p>
            <p className="texto1">Por favor dar clic en un icono para realizar una accion</p>
        </div>
          <div className="Contenedor-proveedor">
                <div className="Contenedorp1"><h3 className="Titulo1">Crear Proveedor</h3>
                <button className="botonprovee" onClick={handleClick1}><img src={Crearproveedor}/></button>
                </div>
                <div className="Contenedorp1"><h3 className="Titulo1">Listar Proveedor</h3>
                <button className="botonprovee"><img src={Listar}/></button>
                </div>
                <div className="Contenedorp1"><h3 className="Titulo1">Actualizar Proveedor</h3>
                <button className="botonprovee"><img src={Actua}/></button>
                </div>
                <div className="Contenedorp1"><h3 className="Titulo1">Inactivar Proveedor</h3>
                <button className="botonprovee"><img src={Inact}/></button>
                </div>
            </div>
            <div className="Contenedor-boton-regresar">
                <button className="botonvolver" onClick={handleClick}>Regresar</button>
            </div>
        </>
    )    
};
export default Proveedor;