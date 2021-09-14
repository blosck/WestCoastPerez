import "../styles/nav.css";
import React from "react";

function Item({pro}){
    return(
        <>
            <div key={pro.id} className="contenedorPro">
                    <img src={pro.pictureUrl} className="imgPro" alt="Imagen referencial"/>
                    <h4 className="namePro">{pro.title}</h4>
                    <p className="pricePro">{"US $" + pro.price}</p>
                    <p className="descriptionPro">{pro.description}</p>
            </div>        
        </>
    )
}

export default Item