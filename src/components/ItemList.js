import React from "react";
import "../styles/nav.css";
import Item from "./Item"

function ItemList({productos}){
    return(
        <>
           {productos.map(pro => <Item pro={pro}/>)}            
        </>
    )
}

export default ItemList
