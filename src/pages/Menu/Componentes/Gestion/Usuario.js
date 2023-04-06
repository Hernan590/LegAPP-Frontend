import React from "react";
import "./Forma.css";
import { useHistory } from 'react-router-dom';
import Crear from "../imagenes/Crearcuenta.png";
import listarusuario from "../imagenes/listarcliente.png";
import Actua from "../imagenes/Actualizarusuario.png";
import Inact from "../imagenes/eliminarusuario.png";

const Usuario = () => {
    const history = useHistory();
    const handleClick = () => history.push("/menu");
    return (
        <>
        <header className="header1">
            <h1 className="Titulo-inicial" >Bienvenido a gestion de usuario</h1>
        </header>
        <div className="contenedor-texto">
            <p className="texto1">¿Que deseas hacer?</p>
            <p className="texto1">Por favor dar clic en un icono para realizar una accion.</p>
        </div>
          <div className="Contenedor-proveedor">
                <div className="Contenedorp1"><h3 className="Titulo1">Crear Usuario</h3>
                <button className="botonprovee"><img src={Crear} className="tamaño_imagen"/></button>
                </div>
                <div className="Contenedorp1"><h3 className="Titulo1">Listar Usuario</h3>
                <button className="botonprovee"><img src={listarusuario} className="tamaño_imagen"/></button>
                </div>
                <div className="Contenedorp1"><h3 className="Titulo1">Actualizar Usuario</h3>
                <button className="botonprovee"><img src={Actua} className="tamaño_imagen"/></button>
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