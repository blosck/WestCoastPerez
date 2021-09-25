import { createContext, useState, useContext } from 'react'

const CartContext = createContext([])
export const useCartContext = ( ) => useContext(CartContext)

export default function CartContextProvider({children}) {

    const [listaCarrito, setListaCarrito] = useState([])

    
    function AddToCart(item) {
        let carrito = [...listaCarrito]
        console.log(carrito)
        console.log(item);

            if (carrito.some(i => i.id === item.id)){
            carrito.find(i => i.id === item.id).cantidad += item.cantidad
            carrito.find(i => i.id === item.id).total += (item.cantidad*item.precio)

            setListaCarrito(carrito)
            console.log(carrito)
            }else{
                setListaCarrito([...listaCarrito, item])

            }
    }
    
    function LimpiarCarrito() {
        setListaCarrito([])
    }

    function EliminarItem(id) {
        setListaCarrito( listaCarrito.filter(item => item.id !== id ))
        
    }

    function EstaEnCarro(id) {
        listaCarrito.some(item => item.id === id )
    }

    console.log(listaCarrito)

    return(
        <CartContext.Provider value={{listaCarrito, AddToCart, LimpiarCarrito, EliminarItem, EstaEnCarro}}>
            {children}
        </CartContext.Provider>
      
    )

}

