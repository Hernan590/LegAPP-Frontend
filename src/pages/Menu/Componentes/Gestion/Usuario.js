import React from "react";
import "./Forma.css";
import { useHistory } from 'react-router-dom';
import Crear from "../imagenes/Crearcuenta.png";
import listarusuario from "../imagenes/listarcliente.png";
import Actua from "../imagenes/Actualizarusuario.png";
import Inact from "../imagenes/eliminarusuario.png";
import logoapp from "../imagenes/logo.png";

const Usuario = () => {
    const history = useHistory();
    const handleClick = () => history.push("/menu");
    const handleClick1 = () => history.push("/crearusuario");
    const handleClick2 = () => history.push("/actualizarusuario");
    const handleClick3 = () => history.push("/listarusuario");
    return (
        <>
        <header className="header1">
        <h1 className="Titulo" >
            <img src={logoapp} className="logo"
            />Bienvenido a la gestion de usuario</h1>
        </header>
        <div className="contenedor-texto">
            <p className="texto1">¿Que deseas hacer?</p>
        </div>
          <div className="Contenedor-proveedor">
                <div className="Contenedorp1"><h3 className="Titulo1">Crear Usuario</h3>
                <button className="botonprovee" onClick={handleClick1} ><img src={Crear} className="tamaño_imagen"/></button>
                </div>
                <div className="Contenedorp1"><h3 className="Titulo1">Listar Usuario</h3>
                <button className="botonprovee" onClick={handleClick3} ><img src={listarusuario} className="tamaño_imagen"/></button>
                </div>
                <div className="Contenedorp1"><h3 className="Titulo1">Actualizar Usuario</h3>
                <button className="botonprovee" onClick={handleClick2} ><img src={Actua} className="tamaño_imagen"/></button>
                </div>
                <div className="Contenedorp1"><h3 className="Titulo1">Inactivar Usuario</h3>
                <button className="botonprovee"><img src={Inact} className="tamaño_imagen"/></button>
                </div>
            </div>
            <div className="Contenedor-boton-regresar">
                <button className="botonvolver" onClick={handleClick}>Regresar</button>
            </div>
        
        
        </>
    )    
};
export default Usuario;