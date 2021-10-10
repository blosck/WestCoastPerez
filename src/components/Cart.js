import React from "react"
import { useCartContext } from "../context/cartContext"
import { Link } from 'react-router-dom';
import "../styles/style.css";
import Form from "./Form"

function Cart(){

    const { listaCarrito, EliminarItem, TotalAPagar } = useCartContext()

    const cartVacio =   <div className="cartVacio">
                            <h2 className="warning">Aún no has agregado nada.</h2>
                            <img className="warning2" alt="Carrito" src="https://th.bing.com/th/id/R.fa966cc27b12c98b263e6c6cdd6e4855?rik=EuBze6UkD4p%2fKQ&riu=http%3a%2f%2fclipart-library.com%2fimage_gallery2%2fRetail-PNG-Clipart.png&ehk=bLc5GZLscVSr%2b17j8yj%2bKQyRBWS5cf7OSHT7w6%2fpSsY%3d&risl=&pid=ImgRaw&r=0"/>
                            <Link to="/">
                                <button className="inicio">Quiero ver más productos</button>
                            </Link>
                        </div>
    if (listaCarrito.length === 0) return cartVacio

    return(
        <div className="carrito">
            <div className="carrito2">
                <h3 className="pcarrito">Aquí están los productos de tu carrito</h3>
            </div>
            {listaCarrito.map(i =>  <div className="cartContainer" key={i.id}>
                                        <div className="listado">
                                            <img className="fotoCarrito" src={i.foto} alt={i.producto}/>
                                            <div className="listado2">
                                                <p className="productoCarrito">{i.producto}</p>
                                                <div className="listado3">
                                                    <p className="cantProductoCarrito">{"Cantidad: "+i.cantidad}</p>
                                                    <p className="precioProdCarrito">{"Valor unidad: US $"+i.precio}</p>
                                                </div>
                                            </div>
                                            <div className="listado4">                                
                                                <p className="totalProdCarrito">{"Total: US $"+i.total}</p>
                                                <button className="eliminarItem" onClick={() => EliminarItem(i.id)}>x</button>
                                                <br/>
                                            </div>
                                        </div>
                                    </div>)}
                                    <div className="cartContainer">
                                        <h2>Total a pagar: US ${TotalAPagar()}</h2>
                                    </div>
                                    <Form/>                                    
        </div>
    )
}

export default Cart