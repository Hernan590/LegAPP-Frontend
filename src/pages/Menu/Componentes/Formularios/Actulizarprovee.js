import React from "react";
import "./Formularios.css";
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";


const Formactualizarprovee = () => {
    const history = useHistory();
    const handleRegresar = () => history.push("/proveedor");
    const handlealerta = () => alert("El proveedor ha sido actualizado");
    const [ nit, setnit ] = useState("");
    const [ nproveedor, setnproveedor ] = useState("");
    const [ tproveedor, settproveedor ] = useState("");
    const [ direccion, setdireccion ] = useState("");
    const [ ncontactop, setncontactop ] = useState("");

    const handleactualizarproveedor = (e) => {
        e.preventDefault();
        axios.patch('http://localhost:4500/updateProvider', {
          nit: nit,
          nombreProveedor: nproveedor,
          telefonoProveedor: tproveedor,
          direccion: direccion,
          nombreContactoProveedor: ncontactop
        })
        .then(response => {
          //console.log(response.data);
          if(response.data["message"]=="Provider updated"){
            handlealerta();
            setnit ("");
            setnproveedor("");
            settproveedor("");
            setdireccion("");
            setncontactop("");
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
            <h2 className="Titulo1">Actualizar Proveedor</h2>
            <p className="texto">Por favor, ingresar los datos que desea cambiar.</p>
            <div className="inputs-contenedor">
            <form onSubmit={handleactualizarproveedor}>
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
                    <h4 className="Titulo1">Nombre del proveedor Nuevo</h4>
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
                    <h4 className="Titulo1">Telefono del proveedor Nuevo</h4>
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
                    <h4 className="Titulo1">Direccion Nueva</h4>
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
                        className="submit-boton" onClick={handleRegresar}>Cancelar</button>
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
export default Formactualizarprovee;