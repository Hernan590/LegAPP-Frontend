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
    return (
        <>
          <div className="Contenedor-proveedor">
                <div className="Contenedorp1"><h3 className="Titulo1">Crear Proveedor</h3>
                <button className="botonprovee"><img src={Crearproveedor}/></button>
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