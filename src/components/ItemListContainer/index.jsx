import React, { useEffect, useState } from 'react';
import '../ItemListContainer/styles.css';
import ItemList from '../ItemList';



function getProducts(){
    const myPromise=new Promise((resolve,reject)=>{
        const productsList=[
            {id:1,title:'Pizza Margerita',description:'Pizza con tomate fresco y muzzarella fior di latte',price:890,image:'pizza-margarita.jpg'},
            {id:2,title:'Pizza Papa y Romero',description:'Pizza con papa, queso provolone y romero',price:950,image:'pizza-papa-romero.jpg'},
            {id:3,title:'Pizza Rucula y Jamón Crudo',description:'Pizza con tomate fresco, muzzarella, rúcula y jamón crudo',price:980,image:'pizza-rucula-jamoncrudo.jpg'}
        ];
        setTimeout(() => {
            resolve(productsList)
        }, 2000);
    });

    return myPromise
}

function ItemListContainer (props) {

    const[products,setProducts]= useState([]);

    useEffect(()=>{
        getProducts()
        .then(res=>{
            setProducts(res);
        })
    },[]);
 

    return ( 
        <div className='itemList-container'>
            <div className='greeting-container'>
            <h1 className='item-list-greeting'>{props.greeting}</h1>
            </div>
            <div> 
                <ItemList items={products}/>
            </div>
            
        </div>    
     );
}

export default ItemListContainer;