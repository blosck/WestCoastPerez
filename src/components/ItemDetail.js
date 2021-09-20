import React from "react";
import "../styles/nav.css";
import ItemCount from "./ItemCount";

function ItemDetail({producto}){
        
    const onAdd = (contador) => {
      if(contador == 1){
          alert("Agregaste " + contador + " producto.")
      }else{
          alert("Agregaste " + contador + " productos.")
      }
    }
        
    return(
        <>
            <div key={producto.id} className="contenedorPro">
                    <img src={producto.pictureUrl} className="imgPro" alt="Imagen referencial"/>
                    <h4 className="namePro">{producto.title}</h4>
                    <p className="pricePro">{"US $" + producto.price}</p>
                    <p className="descriptionPro">{producto.description}</p>
                    <ItemCount stock="10" initial="1" onAd={onAdd} />
            </div>        
        </>
    )
}

export default ItemDetail