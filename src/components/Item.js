import "../styles/nav.css";
import React from "react";
import { Link } from "react-router-dom";

function Item({pro}){
    return(
        <>
            <div key={pro.id} className="contenedorPro">
                    <img src={pro.pictureUrl} className="imgPro" alt="Imagen referencial"/>
                    <h4 className="namePro">{pro.title}</h4>
                    <p className="pricePro">{"US $" + pro.price}</p>
                    <Link to={`/detalles/${pro.id}`}>
                        <button className="botonPro">Detalle</button>
                    </Link>
            </div>        
        </>
    )
}

export default Item