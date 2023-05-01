import React from "react";
import { useState,  useEffect } from "react";
import "./Listas.css";
import { useHistory } from 'react-router-dom';
import axios from "axios";


const Listarproveedor= () => {

    const history = useHistory();
    const [datos, setDatos] = useState([]);
    const handleRegresar = () => history.push("/proveedor");

    useEffect(() => {
      axios.get("http://localhost:4500/proveedores")
      .then((response) => {
        let result = response.data.filter((element)=>{
            if(element.estado==1){
                return element;
            } 
        })
        setDatos(result);
    })
        .catch((error) => console.log(error));
    }, []);

return (
        <>
            <div className="lista-contenedor">
                <h1 className="Titulo1">Listado de todos los proveedores en la base de datos</h1> 
                <table>
                    <thead>
                        <tr>
                        <th>Nit</th>
                        <th>Nombre del proveedor</th>
                        <th>Telefono del proveedor</th>
                        <th>Direccion</th>
                        </tr>
                    </thead>
                <tbody>
                {datos.map((datos) => (
                    <tr key={datos.idProveedor}>
                        <td>{datos.NIT}</td>
                        <td>{datos.nombreProveedor}</td>
                        <td>{datos.telefonoProveedor}</td>
                        <td>{datos.direccion}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
                <button
                    type="submit"
                    className="boton-regresar" onClick={handleRegresar}>Regresar
                    </button>
            </div>
        </>
    )   
};
export default Listarproveedor;