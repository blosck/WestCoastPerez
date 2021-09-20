import React from 'react'
import ItemDetail from './ItemDetail'
import { useState , useEffect } from 'react/cjs/react.development'
import "../styles/nav.css"
import { useParams } from 'react-router'

const productos = [
    {id: 1, category: "cases", title: "Acid Smiles - Neon Green iPhone 12 Pro Case", description: "Nuestro innovador material a prueba de golpes, qìtech ™, prácticamente ruega que dejes caer tu teléfono y lo pongas a prueba. Cada detalle está afinado para crear una protección óptima y una resistencia superior a los impactos en una funda para teléfonos ultra elegante y delgada.", price: 55, pictureUrl: "https://cdn-image02.casetify.com/usr/16571/16546571/~v8/13084976x2_iphone12-pro_16001659.png.1000x1000-w.m80.jpg"},
    {id: 2, category: "cases", title: "The Wild Case iPhone 12 Pro Case", description: "Nuestro innovador material a prueba de golpes, qìtech ™, prácticamente ruega que dejes caer tu teléfono y lo pongas a prueba. Cada detalle está afinado para crear una protección óptima y una resistencia superior a los impactos en una funda para teléfonos ultra elegante y delgada.", price: 58, pictureUrl: "https://cdn-image02.casetify.com/usr/19242/1819242/~v1/17743814x2_iphone12-pro_16001659.png.1000x1000-w.m80.jpg"},
    {id: 3, category: "caps", title: "Korean Summer Baseball Cap", description: "", price: 11.49 , pictureUrl: "https://img.staticdj.com/1a0a20eb625648581b44e3ed7c0e681e_1080x.jpeg" },
    {id: 4, category: "caps", title: "Korean Summer Baseball Cap", description: "", price: 11.49 , pictureUrl: "https://img.staticdj.com/c51a68d4693b3c71e2e1d3e9411bcba0_1080x.jpeg" },
    {id: 5, category: "caps", title: "Crying Sad Boys Embroidered Baseball Cap", description: "", price: 10.49, pictureUrl: "https://img.staticdj.com/f38e0690e032b4ccdb8e48748fd652f2_1080x.jpeg"},
    {id: 6, category: "caps", title: "Crying Sad Boys Embroidered Baseball Cap", description: "", price: 10.49, pictureUrl: "https://img.staticdj.com/82dfb6d19ba550896502f56362363fa2_1080x.jpeg"},
    {id: 7, category: "caps", title: "Sun visor baseball cap sun hat leisure all-match cap", description: "", price: 10.49, pictureUrl: "https://img.staticdj.com/c48aee78b42006cbd5343050b289bdd0_1080x.jpeg"},
    {id: 8, category: "mascarillas", title: "Everyday Diving Black / Gray Fabric Tactical Dust Masks", description: "", price: 12.49, pictureUrl: "https://img.staticdj.com/182d8996f0a8c6a39abfb94c0794deea_1080x.jpg"},
    {id: 9, category: "mascarillas", title: "Everyday Diving Black / Gray Fabric Tactical Dust Masks", description: "", price: 12.49, pictureUrl: "https://img.staticdj.com/1a9da45046d6c15b0f200853e3ee5a99_1080x.jpeg"},
    {id: 10, category: "collares", title: "Chain Bullet Army Brand Pendant Long Necklace", description: "", price: 6.49, pictureUrl: "https://img.staticdj.com/8a1fcc68a60655c39ca6f2a9130e31aa_1080x.jpeg"},
    {id: 11, category: "collares", title: "Simple Metal Stick Necklace", description: "", price: 7.99, pictureUrl: "https://img.staticdj.com/15e354d2eb8c795425b0571219792de4_1080x.jpeg"},
    {id: 12, category: "collares", title: "Necklace street hip hop titanium steel tide jewelry", description: "", price: 10.49, pictureUrl: "https://img.staticdj.com/2485be3c68d45bb6709874b45f98447e_1080x.jpeg"},
    {id: 13, category: "collares", title: "Hip Hop Personality Astronaut Astronaut Pendant Couple Trendy Jewelry", description: "", price: 6.49, pictureUrl: "https://img.staticdj.com/7ad5c9be146d30d2f56b3703315b6db6_1080x.jpeg"},
    {id: 14, category: "bags", title: "Tooling style large-capacity messenger bag fashion sports diagonal chest bag", description: "", price: 19.50, pictureUrl: "https://img.staticdj.com/0bacc4c4011619715ba48c96962210e9_1080x.jpeg"},
    {id: 15, category: "bags", title: "Tooling style large-capacity messenger bag fashion sports diagonal chest bag", description: "", price: 19.50, pictureUrl: "https://img.staticdj.com/68dca9fd343abde21218b672016a0698_1080x.jpeg"},
    {id: 16, category: "bags", title: "Functional Waist Bag", description: "", price: 17.50, pictureUrl: "https://img.staticdj.com/6bd90460f97cc9123b4b56a677de76f2_1080x.jpeg"},
    {id: 17, category: "bags", title: "Messenger bag men's trendy brand tooling function wind multi-purpose shoulder bag trend chest bag student personality sports backpack trend", description: "", price: 19.28, pictureUrl: "https://img.staticdj.com/3ebcd6d7aff6150633de9f9e44dd764b_1080x.jpeg"},
    {id: 18, category: "bags", title: "High-capacity Reflective Backpack", description: "", price: 27.65, pictureUrl: "https://img.staticdj.com/10c2dd08765e817feb37c7cf7607ae2f_1080x.jpeg"},
    {id: 19, category: "bags", title: "High-capacity Reflective Backpack", description: "", price: 27.65, pictureUrl: "https://img.staticdj.com/cca1741fb08b457365feba676cf93e60_1080x.jpeg"}
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

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState()
    const {id} = useParams()

    useEffect(() => { //Desde aquí estoy haciendo uso de la API o recurso
        if(id){
            producto
            .then(res => {
                const producto = res.filter((item) => parseInt(item.id) === parseInt(id))
                setDetail(filtrado)
            })
            .catch(err => console.log(err))
            .finally(() => console.log("Proceso terminado"))
        }else{
            producto
        .then(res => {
            setDetail(res)
        })
        .catch(err => console.log(err))
        .finally(() => console.log("Proceso terminado"))
        }
    }, [id]);

    return (
        <>
            {detail && <ItemDetail producto={detail}/>}           
        </>
    )
}

export default ItemDetailContainer