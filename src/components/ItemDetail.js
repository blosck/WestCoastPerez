import "../styles/style.css";
import { useCartContext } from "../context/cartContext"
import ItemCount from "./ItemCount";
import React from "react";

function ItemDetail({detail}){
    
    const {AddToCart} = useCartContext()
        
    const onAdd = (contador) => {
        AddToCart({id: detail.id, producto: detail.title, precio: detail.price, cantidad: contador, total: detail.price*contador, foto: detail.pictureUrl})
    }
    
    return(
        <>
            <div key={detail.id} className="contenedorPro2">
                    <img src={detail.pictureUrl} className="imgPro2" alt="Imagen referencial"/>
                    <h4 className="namePro2">{detail.title}</h4>
                    <p className="pricePro2">{"US $" + detail.price}</p>
                    <p className="descriptionPro">{detail.description}</p>
                    <ItemCount stock="10" initial="1" onAdd={onAdd} />
            </div>
        </>
    )
}

export default ItemDetail