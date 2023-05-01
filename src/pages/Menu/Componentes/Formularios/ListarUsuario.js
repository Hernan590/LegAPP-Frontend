import React from "react";
import { useState,  useEffect } from "react";
import "./Listas.css";
import { useHistory } from 'react-router-dom';
import axios from "axios";


const Listarusuario= () => {

    const history = useHistory();
    const [datos, setDatos] = useState([]);
    const handleRegresar = () => history.push("/usuario");

    useEffect(() => {
      axios.get("http://localhost:4500/usuarios")
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
                <h1 className="Titulo1">Listado de todos los usuarios en la base de datos</h1> 
                <table>
                    <thead>
                        <tr>
                        <th>id-Rol</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                        </tr>
                    </thead>
                <tbody>
                {datos.map((dato) => (
                    <tr key={dato.idUsuario}>
                        <td>{dato.idRol}</td>
                        <td>{dato.nombre}</td>
                        <td>{dato.email}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
                <button
                        type="submit"
                        className="boton-regresar" onClick={handleRegresar}>Regresar</button>
            </div>
        </>
    )   
};
export default Listarusuario;