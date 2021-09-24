import { createContext, useState, useContext } from 'react'

const CartContext = createContext([])
export const useCartContext = ( ) => useContext(CartContext)

export default function CartContextProvider({children}) {

    const [listaCarrito, setListaCarrito] = useState([])

    
    function AddToCart(item) {
        let carrito = [...listaCarrito]
        console.log(carrito)

        //console.log("item", item);
        //console.log("id", item.id);
        if (carrito.some(i => i.id === item.id)){
            carrito.find(i => i.id === item.id).cantidad += item.cantidad
            console.log(item.cantidad);
            carrito.find(i => i.id === item.id).total += (item.cantidad*item.precio)

            setListaCarrito(carrito)
            console.log(carrito)
            }else{
                setListaCarrito([...listaCarrito, item])

            }
    }

    console.log(listaCarrito)

    return(
        <CartContext.Provider value={{listaCarrito, AddToCart}}>
            {children}
        </CartContext.Provider>
      
    )

}

