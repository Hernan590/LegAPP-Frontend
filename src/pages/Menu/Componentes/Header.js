import React from "react";
import { useHistory } from 'react-router-dom';
import "./Header.css";
import pregunta from "./imagenes/image.png";
import gasto from "./imagenes/tipogasto.png";
import proveedor from "./imagenes/Proveedor.png";
import usuario from "./imagenes/Usuario.png";
import logoapp from "./imagenes/logo.png";
import reporte from "./imagenes/reportegasto.png";

const Header = () => {
    const history = useHistory();
    const handleClick = () => history.push("/");
    const handleClick1 = () => history.push("/proveedor");
    const handleClick2 = () => history.push("/usuario");
    const handleClick3 = () => history.push("/gasto");
    return(
        <>
        <header className="header">
            <h1 className="Titulo" >
            <img src={logoapp} className="logo"
            />Bienvenido a legAPP</h1>
            <nav>
                <ul> 
                    <li><img src={pregunta} className="pregunta"/></li>   
                    <li><button className="boton" onClick={handleClick}>Cerrar sesion</button></li>
                </ul>
            </nav>
        </header>
            <div className="Contenedor-texto1">
            </div>
            <div className="Contenedor">
                <div className="Contenedor1"><h3 className="Titulo1">Gestion de usuario</h3>
                <button className="boton1" onClick={handleClick2}><img src={usuario} className="tamaño_imagen1"/></button>
                </div>
                <div className="Contenedor1"><h3 className="Titulo1">Gestion de proveedor</h3>
                <button className="boton1" onClick={handleClick1}><img src={proveedor} className="tamaño_imagen1"/></button>
                </div>
                <div className="Contenedor1"><h3 className="Titulo1">Gestion de gasto</h3>
                <button className="boton1" onClick={handleClick3}><img src={gasto} className="tamaño_imagen1"/></button>
                </div>
                <div>
                <h3 className="Titulo1">Reporte de gastos</h3>
                <a href="https://lookerstudio.google.com/u/0/reporting/8986615c-e77f-4b99-a380-cadd2964f1a6/page/aSzND?s=rEEf8Sj_86U"><img src={reporte} className="tamaño_imagen1"/></a>
                </div>
            </div>
        </>
        
    )
};
    
export default Header;