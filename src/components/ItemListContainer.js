import React from 'react'
import { useState , useEffect } from 'react/cjs/react.development'
import { useParams } from "react-router-dom";
import "../styles/nav.css"
import ItemList from './ItemList'
import { getFirestore } from '../services/getFirebase';

const ListItemContainer = (props) => {

    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])
    const {idCategoria} = useParams()

    useEffect(() => { //Desde aquí estoy haciendo uso de la API o recurso
        
        if(idCategoria){
            const dbQuery = getFirestore()
            dbQuery.collection('items').where('category', '==', idCategoria).get()
            .then(res => {
                setProductos(res.docs.map(producto =>({id: producto.id, ...producto.data()})))
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))            
        } else {
            const dbQuery = getFirestore()
            dbQuery.collection('items').get()
            .then(res => {
                setProductos(res.docs.map(producto =>({id: producto.id, ...producto.data()})))
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false)) 
        }

    }, [idCategoria]);

    return (
        <>
            {loading ? <h1>Cargando contenido...</h1> :
            <div>
                <ItemList productos={productos}/>
            </div>}
            </>
    )
}

export default ListItemContainer