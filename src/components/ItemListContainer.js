import React from 'react'
import { useState , useEffect } from 'react/cjs/react.development'
import "../styles/nav.css"
import ItemList from './ItemList'

const productos = [
    {id: 1, category: "cases", title: "Acid Smiles - Neon Green iPhone 12 Pro Case", description: "Nuestro innovador material a prueba de golpes, qìtech ™, prácticamente ruega que dejes caer tu teléfono y lo pongas a prueba. Cada detalle está afinado para crear una protección óptima y una resistencia superior a los impactos en una funda para teléfonos ultra elegante y delgada.", price: 55, pictureUrl: "https://cdn-image02.casetify.com/usr/16571/16546571/~v8/13084976x2_iphone12-pro_16001659.png.1000x1000-w.m80.jpg"},
    {id: 2, category: "casex", title: "The Wild Case iPhone 12 Pro Case", description: "Nuestro innovador material a prueba de golpes, qìtech ™, prácticamente ruega que dejes caer tu teléfono y lo pongas a prueba. Cada detalle está afinado para crear una protección óptima y una resistencia superior a los impactos en una funda para teléfonos ultra elegante y delgada.", price: 58, pictureUrl: "https://cdn-image02.casetify.com/usr/19242/1819242/~v1/17743814x2_iphone12-pro_16001659.png.1000x1000-w.m80.jpg"}
]    

const producto = new Promise((resolve, rejected) => {
    let respuesta = "200" 
    if(respuesta === "200"){
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    }else{
        rejected("404 Not found")
    }
})

const ListItemContainer = (props) => {

    const [productos, setProductos] = useState([])

    useEffect(() => { //Desde aquí estoy haciendo uso de la API o recurso
        producto
        .then(res => {
            setProductos(res)
        })
        .catch(err => console.log(err))
        .finally(() => console.log("Proceso terminado"))
    }, []);

    return (
        <>
            <p className="parrafo">{props.greetings[0]}</p>
            <p className="parrafo">{props.greetings[1]}</p>
            <p className="parrafo">{props.greetings[2]}</p>
            <p className="parrafo">{props.greetings[3]}</p>
            <p className="parrafo">{props.greetings[4]}</p>  
            <p className="parrafo">{props.cosas}</p>
            <ItemList productos={productos}/>
        </>
    )
}

export default ListItemContainer