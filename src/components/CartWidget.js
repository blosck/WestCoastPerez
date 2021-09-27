import React from "react";
import { Link } from 'react-router-dom';
import { useCartContext } from "../context/cartContext"
import "../styles/nav.css";

export function CartWidget(){

    const { listaCarrito , TotalProductos} = useCartContext()
    const total = TotalProductos()

    const cartVacio =   <>
                            <div className="widget">
                                <Link to={"/cart"}>
                                <img className="carritoOculto" alt="Carrito" src="https://th.bing.com/th/id/R.d01f6a524827d080143ba7b6a4fd2961?rik=aJBXoRURTks1yw&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-shopping-cartshoppingcarttrolleycarriagebuggysupermarkets-1421526532323sy0um.png&ehk=mop8QmM6l%2b01ngtsCNr1Du8xLFAEsLSD6dd8xLJDy%2b8%3d&risl=&pid=ImgRaw&r=0"/>
                                <p></p>    
                                </Link>
                            </div>  
                        </>

    if (listaCarrito.length === 0) return cartVacio

    return(
        <div className="widget">
            <Link to={"/cart"}>
                <img className="cart" alt="Carrito" src="https://th.bing.com/th/id/R.d01f6a524827d080143ba7b6a4fd2961?rik=aJBXoRURTks1yw&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-shopping-cartshoppingcarttrolleycarriagebuggysupermarkets-1421526532323sy0um.png&ehk=mop8QmM6l%2b01ngtsCNr1Du8xLFAEsLSD6dd8xLJDy%2b8%3d&risl=&pid=ImgRaw&r=0"/>
            </Link>
            <p className="total">{total}</p>    
        </div>
    )
}
