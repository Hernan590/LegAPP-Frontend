import React from "react";
import "./Forma.css";
import Crearproveedor from "../imagenes/crearpro.png";
import Listar from "../imagenes/Lista.png";
import Actua from "../imagenes/Actualizar.png";
import Inact from "../imagenes/Inactivar.png";
import { useHistory } from 'react-router-dom';
import logoapp from "../imagenes/logo.png";

const Proveedor = () => {
    const history = useHistory();
    const handleClick = () => history.push("/menu");
    const handleClick1 = () => history.push("/crearproveedor");
    const handleClick3 = () => history.push("/actualizarproveedor");
    const handleClick4 = () => history.push("/listarproveedor");

    return (
        <>
        <header className="header1">
        <h1 className="Titulo" >
            <img src={logoapp} className="logo"
            />Bienvenido a la gestion de proveedor</h1>
        </header>
        <div className="contenedor-texto">
            <p className="texto1">¿Que deseas hacer?</p>
        </div>
          <div className="Contenedor-proveedor">
                <div className="Contenedorp1"><h3 className="Titulo1">Crear Proveedor</h3>
                <button className="botonprovee" onClick={handleClick1}><img src={Crearproveedor}/></button>
                </div>
                <div className="Contenedorp1"><h3 className="Titulo1">Listar Proveedor</h3>
                <button className="botonprovee" onClick={handleClick4}><img src={Listar}/></button>
                </div>
                <div className="Contenedorp1"><h3 className="Titulo1">Actualizar Proveedor</h3>
                <button className="botonprovee" onClick={handleClick3}><img src={Actua}/></button>
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