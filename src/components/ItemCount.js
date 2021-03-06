import { useState } from 'react'
import { Link } from 'react-router-dom';
import "../styles/style.css";

function ItemCount({stock, initial, onAdd}){

    const [contador, setContador] = useState (1)
    const [cambiarBoton, setCambiarBoton] = useState(true)
    
    const sumar = () => {
        if ((contador >= initial) && (contador < stock)){
            setContador(contador + 1)
        }
    }
    const restar = () => {
        if ((contador <= stock) && (contador > initial)){
            setContador(contador - 1)
        }
    }

    const agregarACart = () => {
        onAdd(contador)
        setCambiarBoton(false)
    }    
    
    return(
        <div>
            <div className="counter0">
                <p className="cantidad">Seleccione la cantidad a comprar</p>
            </div>
            <div className="counter">
                <button className="boton" onClick={restar}>-</button>
                <p className="contador">{contador}</p>
                <button className="boton" onClick={sumar}>+</button>
            </div>
            <div className="counter">
                {cambiarBoton ? 
                <button className="botonCarrito" onClick={agregarACart}>Agregar al carrito</button> :
                <>
                    <Link to={"/cart"}>
                        <button className="botonCarrito">Terminar compra</button>
                    </Link>
                    <Link to="/">
                        <button className="botonCarrito">Ver más productos</button>
                    </Link>
                </>
                }
            </div>
        </div>
    )
}

export default ItemCount