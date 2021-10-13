import "../styles/style.css"
import { useState , useEffect } from 'react'
import { getFirestore } from '../services/getFirebase'
import { useParams } from 'react-router'
import ItemDetail from './ItemDetail'
import React from 'react'

const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(true)
    const [detail, setDetail] = useState([])
    const {id} = useParams()

    useEffect(() => {
        if(id){
            const dbQuery = getFirestore()
            dbQuery.collection('items').doc(id).get()
            .then(res => {
                setDetail({id: res.id, ...res.data()})
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))            
        } 
    }, [id])
            
    return (
        <>
            {loading ? <div className="loading"><h1>Cargando productos...</h1></div> :
            <div className="itemDetail4">
                <ItemDetail key={detail} detail={detail}/>           
            </div>}
        </>
    )
}

export default ItemDetailContainer