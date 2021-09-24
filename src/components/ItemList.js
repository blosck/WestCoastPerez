import React from "react";
import "../styles/nav.css";
import Item from "./Item"

function ItemList({productos}){
    return(
        <>
           {productos.map(pro => <Item key={pro.id} pro={pro}/>)}            
        </>
    )
}

export default ItemList
