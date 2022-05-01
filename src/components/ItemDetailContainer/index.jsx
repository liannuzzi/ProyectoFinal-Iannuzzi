import React, { useState, useEffect } from 'react';
import ItemCount from '../ItemCount';
import ItemDetail from '../ItemDetail';
import '../ItemDetailContainer/styles.css'


function getItem () {
    const myPromise= new Promise((resolve,reject)=>{
    const producto=[{id:1,title:'Pizza Margerita',description:'Pizza con tomate fresco y muzzarella fior di latte',price:890,image:'pizza-margarita.jpg'}];
    setTimeout(() => {
        resolve(producto)
    }, 2000);
})
    return myPromise;
};

function ItemDetailContainer() {

    const [product,setProduct]=useState([]);
    
    useEffect(() => {
        getItem()
        .then(res=>{
            setProduct(res);
        })
    }, []);

    return ( 
        <div className='itemDetail-container'>
            <div>
                {product.map((item)=><ItemDetail item={item} key={item.id}/>)}
            </div>
            <div>
            <ItemCount stock={10} initial={0} />
            </div>
        </div>
     );
}

export default ItemDetailContainer;
