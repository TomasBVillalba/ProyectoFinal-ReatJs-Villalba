import React, {useState, useEffect} from 'react'
import ItemList from '../ItemList'
import { useParams } from 'react-router-dom'
const productos = [
    {
        id: 1,
        titulo: "Mate imperial liso",
        imagen: "https://d22fxaf9t8d39k.cloudfront.net/6f202e4866ab23ceabe1830b8c7b4e08fe6b26706fb824c7307b109de49d9a2233542.jpeg",
        "categoria": 'mates',
        precio: 7000
    },
    {
        id: 2,
        titulo: "Mate imperial cincelado",
        imagen: "https://d22fxaf9t8d39k.cloudfront.net/6f202e4866ab23ceabe1830b8c7b4e08fe6b26706fb824c7307b109de49d9a2233542.jpeg",
        "categoria": 'mates',
        precio: 9000
    },
    



    {
        id: 3,
        titulo: "Pico loro alpaca cincelada",
        imagen: "https://d2r9epyceweg5n.cloudfront.net/stores/001/238/646/products/diseno-sin-titulo-91-6bdeba153fc243777c15960597578218-480-0.png",
        "categoria": 'bombillas',
        precio: 3800
    },
    {
        id: 4,
        titulo: "Pico loro lisa",
        imagen: "https://d2r9epyceweg5n.cloudfront.net/stores/001/238/646/products/diseno-sin-titulo-91-6bdeba153fc243777c15960597578218-480-0.png",
        "categoria": 'bombillas',
        precio: 3200
    },



    {
        id: 5,
        titulo: "Yerba canarias",
        imagen: "https://d3ugyf2ht6aenh.cloudfront.net/stores/941/465/products/whatsapp-image-2020-09-14-at-15-34-34-11-a6787ccd29c7c840b716009002312979-480-0.jpeg",
        "categoria": 'yerbas',
        precio: 1700
    },
    {
        id: 6,
        titulo: "Yerba rei verde",
        imagen: "https://d3ugyf2ht6aenh.cloudfront.net/stores/941/465/products/whatsapp-image-2020-09-14-at-15-34-34-11-a6787ccd29c7c840b716009002312979-480-0.jpeg",
        "categoria": 'yerbas',
        precio: 1500
    },

    {
        id: 7,
        titulo: "Set matero marron",
        imagen: "https://www.eneyememayorista.com.ar/7238-thickbox_default/set-premium-con-tapa-mate-azucarera-yerbera-y-termo-nexus-art-3008-sl-100z.jpg",
        "categoria": 'setmatero',
        precio: 3000
    },

]


export const ItemListContainer = () => {
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout (() =>{
                resolve(productos)}, 1000) ;
        });
        if (categoriaId) {
            getData.then(res =>setData (res.filter(productos => productos.categoria === categoriaId)));
        }else {
            getData.then(res => setData(res));
        }
        
    },[categoriaId])

    
  return (
    <>
    <ItemList data= {data}/>
    </>
    
  );
}

export default ItemListContainer