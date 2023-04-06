import React from "react";
import "./Formularios.css";
import { useHistory } from 'react-router-dom';

const Formcrearprovee = () => {
    const history = useHistory();
    const handleClick = () => history.push("/proveedor");
    return (
        <>
        <div className="formulario-contenedor"> 
            <h2 className="Titulo1">Crear Proveedor</h2>
            <p className="texto">Por favor, ingresar los datos correctamente.</p>
            <div className="inputs-contenedor">
            <form>
                <div>
                    <h4 className="Titulo1">Nit</h4>
                    <input
                    id="nit"
                    name="nit"
                    placeholder="Nit"
                    type="text"
                    className="regular-style"/>
                </div>
                <div>
                    <h4 className="Titulo1">Nombre del proveedor</h4>
                    <input
                    id="proveedor"
                    name="nombreproveedor"
                    placeholder="Nombre del proveedor"
                    type="text"
                    className="regular-style"/>
                </div>
                <div>
                    <h4 className="Titulo1">Telefono del proveedor</h4>
                    <input
                    id="telefono"
                    name="telefonoproveedor"
                    placeholder="Telefono del proveedor"
                    type="tel"
                    className="regular-style"/>
                </div>
                <div>
                    <h4 className="Titulo1">Direccion</h4>
                    <input
                    id="direccion"
                    name="direccion"
                    placeholder="Escribe la direccion"
                    type="text"
                    className="regular-style"/>
                </div>
                <div>
                    <h4 className="Titulo1">Nombre del contacto del proveedor</h4>
                    <input
                    id="contacto"
                    name="contacto"
                    placeholder="Escribe el contacto"
                    type="tel"
                    className="regular-style"/>
                </div>
                    <div className="contenedor-enviar"> 
                    <button
                        type="submit"
                        className="submit-boton" onClick={handleClick}>Regresar</button>
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
export default Formcrearprovee;