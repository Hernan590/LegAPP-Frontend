import React from "react";
import { useHistory } from 'react-router-dom';
import "./Header.css";
import pregunta from "./imagenes/image.png";
import gasto from "./imagenes/tipogasto.png";
import proveedor from "./imagenes/Proveedor.png";
import usuario from "./imagenes/Usuario.png";



const Header = () => {
    const history = useHistory();
    const handleClick = () => history.push("/");
    const handleClick1 = () => history.push("/proveedor");
    return(

        <>
        <header className="header">
            <h1 className="Titulo" >Bienvenido a legAPP</h1>
            <nav>
                <ul> 
                    <li><img src={pregunta} className="pregunta"/></li>   
                    <li><button className="boton" onClick={handleClick}>Cerrar sesion</button></li>
                </ul>
            </nav>
        </header>
            <div className="Contenedor">
                <div className="Contenedor1"><h3 className="Titulo1">Gestion de usuario</h3>
                <button className="boton1"><img src={usuario}/></button>
                </div>
                <div className="Contenedor1"><h3 className="Titulo1">Crear proveedor</h3>
                <button className="boton1" onClick={handleClick1}><img src={proveedor}/></button>
                </div>
                <div className="Contenedor1"><h3 className="Titulo1">Crear tipo de gasto</h3>
                <button className="boton1"><img src={gasto}/></button>
                </div>
            </div>
        </>
        
    )
};
    
export default Header;