import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from '../../components/ItemCount';
import ItemDetail from '../../components/ItemDetail';
import './styles.css'


function getItem (id) {
    const myPromise= new Promise((resolve,reject)=>{
        const productsList=[
            {id:1,title:'Pizza Margerita',description:'Pizza con tomate fresco y muzzarella fior di latte',price:890,image:`${process.env.PUBLIC_URL}/assets/Productos/pizza-margarita.jpg`,category:"Pizzas"},
            {id:2,title:'Pizza Papa y Romero',description:'Pizza con papa, queso provolone y romero',price:950,image:`${process.env.PUBLIC_URL}/assets/Productos/pizza-papa-romero.jpg`,category:"Pizzas"},
            {id:3,title:'Pizza Rucula y Jamón Crudo',description:'Pizza con tomate fresco, muzzarella, rúcula y jamón crudo',price:980,image:`${process.env.PUBLIC_URL}/assets/Productos/pizza-rucula-jamoncrudo.jpg`,category:"Pizzas"},
            {id:4,title:'Coca-Cola 500ml',description:'Coca-Cola 500ml',price:120,image:`${process.env.PUBLIC_URL}/assets/Productos/coca-cola500ml.jpg`,category:"Bebidas"},
            {id:5,title:'Sprite 500ml',description:'Sprite 500ml',price:115,image:`${process.env.PUBLIC_URL}/assets/Productos/fanta500ml.jpg`,category:"Bebidas"},
            {id:6,title:'Fanta 500ml',description:'Fanta 500ml',price:110,image:`${process.env.PUBLIC_URL}/assets/Productos/sprite500ml.jpg`,category:"Bebidas"},
            {id:7,title:'Tiramisú',description:'Tiramisú',price:450,image:`${process.env.PUBLIC_URL}/assets/Productos/tiramisu.jpg`,category:"Postres"},
            {id:8,title:'Flan Casero',description:'Flan Casero',price:300,image:`${process.env.PUBLIC_URL}/assets/Productos/flan-casero.jpg`,category:"Postres"},
            {id:9,title:'Franui',description:'Franui',price:520,image:`${process.env.PUBLIC_URL}/assets/Productos/franui.jpg`,category:"Postres"}
        ];
     
    const item=productsList.filter(item=>item.id===parseInt(id));
    resolve(item[0]);
})
    return myPromise;
};

function ItemDetailContainer() {

    const [product,setProduct]=useState({});
    const {id}=useParams();
    
    useEffect(() => {
        getItem(id)
        .then(res=>{
            setProduct(res);
        })
    }, []);

    return ( 
        <div className='itemDetail-container'>
            <div>
                <ItemDetail item={product}/>
            </div>
        </div>
     );
}

export default ItemDetailContainer;
