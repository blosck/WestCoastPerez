import { createContext, useState, useContext } from 'react'

const CartContext = createContext([])
export const useCartContext = ( ) => useContext(CartContext)

export default function CartContextProvider({children}) {

    const [listaCarrito, setListaCarrito] = useState([])

    function AddToCart(item) {
        let carrito = [...listaCarrito]
        console.log(carrito)
        console.log(item)
        
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

    function TotalAPagar() {
        let total = 0
        listaCarrito.forEach((item) => {total += (item.total)})
        return (total)
    }

    function TotalProductos() {
        let cant = 0
        listaCarrito.forEach((item) => {cant += parseInt(item.cantidad)})
        return parseInt(cant)        
    }


    return(
        <CartContext.Provider value={{listaCarrito, AddToCart, LimpiarCarrito, EliminarItem, EstaEnCarro, TotalAPagar, TotalProductos}}>
            {children}
        </CartContext.Provider>
      
    )

}

