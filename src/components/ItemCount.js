import {useState} from 'react'
import "../styles/nav.css";

function ItemCount({stock, initial, onAdd}){

    const [contador, setContador] = useState (1)
    
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
    
    return(
        <div>
            <div className="counter">
                <button className="boton" onClick={restar}>-</button>
                <p className="contador">{contador}</p>
                <button className="boton" onClick={sumar}>+</button>
            </div>
            <div className="counter">
                <button className="botonCarrito" onClick={()=>onAdd(contador)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount

// </>