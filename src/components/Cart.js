import React from "react"
import { useState } from "react";
import { useCartContext } from "../context/cartContext"
import { getFirestore } from "../services/getFirebase";
import firebase from "firebase";
import 'firebase/firestore'
import { Link } from 'react-router-dom';
import "../styles/nav.css";

function Cart(){

    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        celular: '',
        mail: '',
        confMail: ''
    });

    const { listaCarrito, EliminarItem, TotalAPagar, LimpiarCarrito } = useCartContext()

    const items = TotalAPagar()

    const handleOnSubmit = (e) => {
        e.preventDefault() 
        let order = {}
        order.date  = firebase.firestore.Timestamp.fromDate(new Date())
        order.buyer = formData
        order.total = items
        order.items = listaCarrito.map(item => {
            const id = item.id;
            const producto = item.producto;
            const price = item.total;
            console.log (`este es mi id`, id);
            console.log(`title`, producto);
            console.log(`price`, price);
            return {id, producto, price}        
        })

        const db = getFirestore()
        db.collection('ordenes').add(order)
        .then(res => alert("Su número de orden de compra es: " + res.id))
        .catch(err => console.log(err))
        .finally(() =>
        {setFormData({})
        LimpiarCarrito()
        console.log(formData);})  

//Desde aquí actualizo stock en firebase.
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



    const cartVacio =   <>
                            <h4>Aún no has agregado nada.</h4>
                            <Link to="/">
                                <button>Quiero ver más productos</button>
                            </Link>
                        </>

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

    console.log(formData);
    
    return(
        <>
            {listaCarrito.map(i =>  <div key={i.id}>
                                        <img className="fotoCarrito" src={i.foto} alt={i.producto}/>
                                        <p className="productoCarrito">{i.producto}</p>
                                        <p className="precioProdCarrito">{"US $"+i.precio}</p>
                                        <p className="cantProductoCarrito">{"Cantidad:"+i.cantidad}</p>
                                        <p className="total1ProdCarrito">{"US $"+i.total}</p>
                                        <button onClick={() => EliminarItem(i.id)}>Eliminar</button>
                                        <br/>
                                    </div>)}
                                    <div>
                                        <h4>Total a pagar: US ${items}</h4>
                                    </div>
                                    <form onSubmit={handleOnSubmit} onChange={handleOnChange}>
                                        <label>Nombre cliente</label>
                                        <input type="text" name="nombre" placeholder="Ej: Claudia" defaultValue={formData.nombre}/>
                                        <label>Apellido/s cliente</label>
                                        <input type="text" name="apellido" placeholder="Ej: Vera" defaultValue={formData.apellido}/>
                                        <label>Celular</label>
                                        <input type="number" name="celular" placeholder="Ej: 9 1234 5678" defaultValue={formData.celular}/>
                                        <label>E-mail</label>
                                        <input type="text" name="mail" placeholder="correo@ejemplo.com" defaultValue={formData.mail}/>
                                        <label>Confirmación E-mail</label>
                                        <input type="text" name="confMail" placeholder="Reingrese su e-mail" defaultValue={formData.confMail}/>
                                        <button type="submit" onClick={confirmacionDatos}>Terminar la compra</button>
                                    </form>
        </>
    )
}

export default Cart