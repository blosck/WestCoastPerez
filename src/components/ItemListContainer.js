import React from 'react'
import { useState , useEffect } from 'react/cjs/react.development'
import { getFirestore } from '../services/getFirebase';
import { useParams } from "react-router-dom";
import ItemList from './ItemList'
import "../styles/style.css"

const ListItemContainer = (props) => {

    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])
    const {idCategoria} = useParams()

    useEffect(() => {
        
        const dbQuery = getFirestore()
        const opcionQuery = idCategoria ? dbQuery.collection('items').where('category', '==', idCategoria) : dbQuery.collection('items')

        opcionQuery.get()
        .then(res => {
            setProductos(res.docs.map(producto =>({id: producto.id, ...producto.data()})))
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false)) 
        
    }, [idCategoria]);

    return (
        <>
            {loading ? <div className="loading"><h1>Cargando productos...</h1></div> :
            <div className="itemDetail">
                <div className="itemDetail1">
                    <h2>Encuentra lo que andas buscando</h2>
                </div>
                <div className="itemDetail2">
                    <ItemList productos={productos}/>
                </div>
            </div>}
            </>
    )
}

export default ListItemContainer