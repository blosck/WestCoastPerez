import "../styles/style.css";
import React from "react";
import Item from "./Item"

function ItemList({productos}){
    return(
        <>
            {productos.map(pro => <Item key={pro.id} pro={pro}/>)}            
        </>
    )
}

export default ItemList