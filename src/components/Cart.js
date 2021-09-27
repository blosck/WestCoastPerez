import React from "react"
import { useCartContext } from "../context/cartContext"
import { Link } from 'react-router-dom';
import "../styles/nav.css";

function Cart(){

    const { listaCarrito, EliminarItem, TotalAPagar } = useCartContext()
    const items = TotalAPagar()

    const cartVacio =   <>
                            <h4>Aún no has agregado nada.</h4>
                            <Link to="/">
                                <button>Quiero ver más productos</button>
                            </Link>
                        </>

    if (listaCarrito.length === 0) return cartVacio
    
    return(
        <>
            {listaCarrito.map(i =>  <div key={i.id}>
                                        <img className="fotoCarrito" src={i.foto} alt={i.producto}/>
                                        <p className="productoCarrito">{i.producto}</p>
                                        <p className="precioProdCarrito">{"US $"+i.precio}</p>
                                        <p className="cantProductoCarrito">{"Cantidad:"+i.cantidad}</p>
                                        <p className="total1ProdCarrito">{"US $"+i.total}</p>
                                        <button onClick={() => EliminarItem(i.id)}>Eliminar</button>
                                        <br/>
                                    </div>)}
                                    <div>
                                        <h4>Total a pagar: US ${items}</h4>
                                    </div>
        </>
    )
}

export default Cart