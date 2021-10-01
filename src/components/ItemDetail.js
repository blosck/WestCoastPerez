import React from "react";
import { useCartContext } from "../context/cartContext"
import "../styles/nav.css";
import ItemCount from "./ItemCount";

function ItemDetail({detail}){
    
    console.log(detail);
    const {AddToCart} = useCartContext()
        
    const onAdd = (contador) => {
        AddToCart({id: detail.id, producto: detail.title, precio: detail.price, cantidad: contador, total: detail.price*contador, foto: detail.pictureUrl})
    }
    
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