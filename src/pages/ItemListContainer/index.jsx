import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles.css';
import ItemList from '../../components/ItemList';



function getProducts(category){
    const myPromise=new Promise((resolve,reject)=>{
        const productsList=[
            {id:1,title:'Pizza Margerita',description:'Pizza con tomate fresco y muzzarella fior di latte',price:890,image:'pizza-margarita.jpg',category:"Pizzas"},
            {id:2,title:'Pizza Papa y Romero',description:'Pizza con papa, queso provolone y romero',price:950,image:'pizza-papa-romero.jpg',category:"Pizzas"},
            {id:3,title:'Pizza Rucula y Jamón Crudo',description:'Pizza con tomate fresco, muzzarella, rúcula y jamón crudo',price:980,image:'pizza-rucula-jamoncrudo.jpg',category:"Pizzas"},
            {id:4,title:'Coca-Cola 500ml',description:'Coca-Cola 500ml',price:120,image:'coca-cola500ml.jpg',category:"Bebidas"},
            {id:5,title:'Sprite 500ml',description:'Sprite 500ml',price:115,image:'fanta500ml.jpg',category:"Bebidas"},
            {id:6,title:'Fanta 500ml',description:'Fanta 500ml',price:110,image:'sprite500ml.jpg',category:"Bebidas"},
            {id:7,title:'Tiramisú',description:'Tiramisú',price:450,image:'tiramisu.jpg',category:"Postres"},
            {id:8,title:'Flan Casero',description:'Flan Casero',price:300,image:'flan-casero.jpg',category:"Postres"},
            {id:9,title:'Franui',description:'Franui',price:520,image:'franui.jpg',category:"Postres"}
        ];

        const items= category? productsList.filter(item=>item.category==category) : productsList;

        setTimeout(() => {
            resolve(items)
        }, 2000);
    });

    return myPromise
}

function ItemListContainer () {

    const[products,setProducts]= useState([]);
    const {category}=useParams();

    useEffect(()=>{
        getProducts(category)
        .then(res=>{
            setProducts(res);
        })
    },[category]);
 

    return ( 
        <div className='itemList-container'>
            <ItemList items={products}/>
        </div>    
     );
}

export default ItemListContainer;