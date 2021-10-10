import React from "react"
import "../styles/style.css";
import 'firebase/firestore'
import firebase from "firebase";
import { useState } from "react";
import { getFirestore } from "../services/getFirebase";
import { useCartContext } from "../context/cartContext"
import { Link } from 'react-router-dom';

function Form(){

    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        celular: '',
        mail: '',
        confMail: ''
    });

    const { listaCarrito, TotalAPagar, LimpiarCarrito } = useCartContext()

    const handleOnSubmit = (e) => {
        e.preventDefault() 
        let order = {}
        order.date  = firebase.firestore.Timestamp.fromDate(new Date())
        order.buyer = formData
        order.total = TotalAPagar()
        order.items = listaCarrito.map(item => {
            const id = item.id;
            const producto = item.producto;
            const price = item.total;
            return {id, producto, price}        
        })

        const db = getFirestore()
        db.collection('ordenes').add(order)
        .then(res => alert("Su número de orden de compra es: " + res.id))
        .catch(err => console.log(err))
        .finally(() =>
        {setFormData({})
        LimpiarCarrito();})  

        const actualizarStock = db.collection('items').where(
            firebase.firestore.FieldPath.documentId(), 'in', listaCarrito.map(item => item.id)
        )

        const batch = db.batch()

        actualizarStock.get()
        .then(collection => {
            collection.docs.forEach(docSnapshot => {
                batch.update(docSnapshot.ref, {
                    stock: docSnapshot.data().stock - listaCarrito.find(item => item.id === docSnapshot.id).cantidad
                })
            })

            batch.commit().then(res => {
                console.log("Resultado del Batch: ", res);
            })
        })
    }

    const cartVacio =   <div className="cartVacio">
                            <h2 className="warning">Aún no has agregado nada.</h2>
                            <img className="warning2" alt="Carrito" src="https://th.bing.com/th/id/R.fa966cc27b12c98b263e6c6cdd6e4855?rik=EuBze6UkD4p%2fKQ&riu=http%3a%2f%2fclipart-library.com%2fimage_gallery2%2fRetail-PNG-Clipart.png&ehk=bLc5GZLscVSr%2b17j8yj%2bKQyRBWS5cf7OSHT7w6%2fpSsY%3d&risl=&pid=ImgRaw&r=0"/>

                            <Link to="/">
                                <button className="inicio">Quiero ver más productos</button>
                            </Link>
                        </div>

    if (listaCarrito.length === 0) return cartVacio

    function handleOnChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function confirmacionDatos(e) {
        if (formData.nombre === ''){
            e.preventDefault(
                alert("Debe ingresar un nombre")
            )
        } else if (formData.apellido === ''){
            e.preventDefault(
                alert("Debe ingresar mínimo un apellido")
            ) 
        } else if (formData.mail !== formData.confMail){
            e.preventDefault(
                alert("Ambas direcciones de Email no coinciden")
            ) 
        } else if (formData.celular === ''){
            e.preventDefault(
                alert("Debe ingresar un número de contacto")
            ) 
        } else if (formData.mail === ''){
            e.preventDefault(
                alert("Ambas direcciones de Email no coinciden")
            ) 
        }      
    }

    return(
        <form className="form" onSubmit={handleOnSubmit} onChange={handleOnChange}>
            <p className="datos">Ingrese a continuación los datos solicitados para finalizar la compra.</p>
            <div className="datosForm">                                            
                <label className="label">Nombre</label>
                <input className="input" type="text" name="nombre" placeholder="Ej: Claudia" defaultValue={formData.nombre}/>
                <label className="label">Apellido/s</label>
                <input className="input" type="text" name="apellido" placeholder="Ej: Vera" defaultValue={formData.apellido}/>
            </div>
            <div className="datosForm">
                <label className="label">Celular</label>
                <input className="input" type="number" name="celular" placeholder="Ej: 9 1234 5678" defaultValue={formData.celular}/>
                <label className="label">Email</label>
                <input className="input" type="text" name="mail" placeholder="correo@ejemplo.com" defaultValue={formData.mail}/>
            </div>
            <div className="datosForm">
                <label className="label2">Confirmación Email</label>
                <input className="input" type="text" name="confMail" placeholder="Reingrese su e-mail" defaultValue={formData.confMail}/>
            </div>
            <div className="datosForm">
                <button className="submit" type="submit" onClick={confirmacionDatos}>Terminar la compra</button>
            </div>
        </form>
    )
}

export default Form