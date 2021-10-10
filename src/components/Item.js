import "../styles/style.css";
import { Link } from "react-router-dom";
import React from "react";

function Item({pro}){
    return(
        <>
            <div key={pro.id} className="contenedorPro">
                    <Link to={`/item/${pro.id}`}>
                        <img src={pro.pictureUrl} className="imgPro" alt="Imagen referencial"/>
                    </Link>
                    <h4 className="namePro">{pro.title}</h4>
                    <p className="pricePro">{"US $" + pro.price}</p>
                    <Link to={`/item/${pro.id}`}>
                        <button className="botonPro">Ver detalles</button>
                    </Link>
            </div>        
        </>
    )
}

export default Item