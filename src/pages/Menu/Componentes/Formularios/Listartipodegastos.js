import React from "react";
import { useState,  useEffect } from "react";
import "./Listas.css";
import { useHistory } from 'react-router-dom';
import axios from "axios";


const Listartipodegastos= () => {

    const history = useHistory();
    const [datos, setDatos] = useState([]);
    const handleRegresar = () => history.push("/gasto");

    useEffect(() => {
      axios.get("http://localhost:4500/getSpents")
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
                <h1 className="Titulo1">Listado de todos los gastos en la base de datos</h1> 
                <table>
                    <thead>
                        <tr>
                        <th>Id del gasto</th>
                        <th>Nombre del gasto</th>
                        </tr>
                    </thead>
                <tbody>
                {datos.map((dato, index) => (
                    <tr key={index}>
                        <td>{dato.idTipoGasto} </td>
                        <td>{dato.nombreGasto} </td>
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
export default Listartipodegastos;