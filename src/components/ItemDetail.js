import React from "react";
import { useState } from "react";
import "../styles/nav.css";
import ItemCount from "./ItemCount";

function ItemDetail({detail}){

    const [cantidad, setCantidad] = useState(0)
        
    const onAdd = (contador) => {
        setCantidad(contador)
        if(contador === 1){
            alert("Agregaste " + contador + " producto.")
        }else{
            alert("Agregaste " + contador + " productos.")
        }
    }
    console.log(cantidad)
    
    return(
        <>
            <div key={detail.id} className="contenedorPro">
                    <img src={detail.pictureUrl} className="imgPro" alt="Imagen referencial"/>
                    <h4 className="namePro">{detail.title}</h4>
                    <p className="pricePro">{"US $" + detail.price}</p>
                    <p className="descriptionPro">{detail.description}</p>
                    <ItemCount stock="10" initial="1" onAdd={onAdd} />
            </div>        
        </>
    )
}

export default ItemDetail