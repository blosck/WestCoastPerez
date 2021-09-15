import React from "react";
import "../styles/nav.css";

function ItemDetail({producto}){
    return(
        <>
            <div key={producto.id} className="contenedorPro">
                    <img src={producto.pictureUrl} className="imgPro" alt="Imagen referencial"/>
                    <h4 className="namePro">{producto.title}</h4>
                    <p className="pricePro">{"US $" + producto.price}</p>
                    <p className="descriptionPro">{producto.description}</p>
            </div>        
        </>
    )
}

export default ItemDetail