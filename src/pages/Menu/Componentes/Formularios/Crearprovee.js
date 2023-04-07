import React from "react";
import { useState } from "react";
import "./Formularios.css";
import { useHistory } from 'react-router-dom';
import axios from "axios";


const Formcrearprovee = () => {
    const history = useHistory();
    const handleRegresar = () => history.push("/proveedor");
    const handleClick = () => alert("El proveedor ha sido creado con exito");
    const [ nit, setnit ] = useState("");
    const [ nproveedor, setnproveedor ] = useState("");
    const [ tproveedor, settproveedor ] = useState("");
    const [ direccion, setdireccion ] = useState("");
    const [ ncontactop, setncontactop ] = useState("");

    const handlecrearproveedor = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4500/createProvider', {
          nit: nit,
          nombreProveedor: nproveedor,
          telefonoProveedor: tproveedor,
          direccion: direccion,
          nombreContactoProveedor: ncontactop
        })
        .then(response => {
          //console.log(response.data);
          if(response.data["message"]=="Proveedor creado"){
            handleClick();
          }
          // manejar la respuesta exitosa aquí
        })
        .catch(error => {
          console.log(error);
          // manejar el error aquí
        });
      };

    
    return (
        <>
        <div className="formulario-contenedor"> 
            <h2 className="Titulo1">Crear Proveedor</h2>
            <p className="texto">Por favor, ingresar los datos correctamente.</p>
            <div className="inputs-contenedor">
            <form onSubmit={handlecrearproveedor}>
                <div>
                    <h4 className="Titulo1">Nit</h4>
                    <input
                    id="nit"
                    name="nit"
                    placeholder="Nit"
                    type="text"
                    value={nit}
                    onChange={(e) => setnit(e.target.value)}
                    className="regular-style"/>
                </div>
                <div>
                    <h4 className="Titulo1">Nombre del proveedor</h4>
                    <input
                    id="proveedor"
                    name="nombreproveedor"
                    placeholder="Nombre del proveedor"
                    type="text"
                    value={nproveedor}
                    onChange={(e) => setnproveedor(e.target.value)}
                    className="regular-style"/>
                </div>
                <div>
                    <h4 className="Titulo1">Telefono del proveedor</h4>
                    <input
                    id="telefono"
                    name="telefonoproveedor"
                    placeholder="Telefono del proveedor"
                    type="tel"
                    value={tproveedor}
                    onChange={(e) => settproveedor(e.target.value)}
                    className="regular-style"/>
                </div>
                <div>
                    <h4 className="Titulo1">Direccion</h4>
                    <input
                    id="direccion"
                    name="direccion"
                    placeholder="Escribe la direccion"
                    type="text"
                    value={direccion}
                    onChange={(e) => setdireccion(e.target.value)}
                    className="regular-style"/>
                </div>
                <div>
                    <h4 className="Titulo1">Nombre del contacto del proveedor</h4>
                    <input
                    id="contacto"
                    name="contacto"
                    placeholder="Escribe el contacto"
                    type="tel"
                    value={ncontactop}
                    onChange={(e) => setncontactop(e.target.value)}
                    className="regular-style"/>
                </div>
                    <div className="contenedor-enviar"> 
                    <button
                        type="submit"
                        className="submit-boton" onClick={handleRegresar}>Regresar</button>
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