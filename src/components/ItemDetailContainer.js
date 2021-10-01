import React from 'react'
import { useState , useEffect } from 'react'
import { useParams } from 'react-router'
import { getFirestore } from '../services/getFirebase'
import "../styles/nav.css"
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(true)
    const [detail, setDetail] = useState([])
    const {id} = useParams()

    useEffect(() => { //Desde aquí estoy haciendo uso de la API o recurso
        if(id){
            const dbQuery = getFirestore()
            dbQuery.collection('items').doc(id).get()
            .then(res => {
                console.log(res);
                setDetail({id: res.id, ...res.data()})
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))            
        } else {
            const dbQuery = getFirestore()
            dbQuery.collection('items').get()
            .then(res => {
                setDetail(res)
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false)) 
        }
    }, [])
        
    return (
        <>
            {loading ? <h1>Cargando contenido...</h1> :
            <div>
                <ItemDetail key={detail} detail={detail}/>           
            </div>}
        </>
    )
}

export default ItemDetailContainer