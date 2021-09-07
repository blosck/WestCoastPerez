import {useState} from 'react'
import "../styles/nav.css";

function ItemCount({stock, initial}){

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
        <div className="counter">
            <button className="boton" onClick={restar}>-</button>
            <p className="contador">{contador}</p>
            <button className="boton" onClick={sumar}>+</button>
        </div>
    )
}

export default ItemCount

// </>