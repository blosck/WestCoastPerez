import React from "react"
import { useCartContext } from "../context/cartContext"
import "../styles/nav.css";

function Cart(){
    const {listaCarrito} = useCartContext()
    
    return(
        <>
            {listaCarrito.map(i =>  <div key={i.id}>
                                        <img className="fotoCarrito" src={i.foto} alt={i.producto}/>
                                        <p className="productoCarrito">{i.producto}</p>
                                        <p className="precioProdCarrito">{i.precio}</p>
                                        <p className="cantProductoCarrito">{i.cantidad}</p>
                                        <p className="total1ProdCarrito">{i.total}</p>
                                        <br/>
                                    </div>)}          
        </>
    )
}

export default Cart