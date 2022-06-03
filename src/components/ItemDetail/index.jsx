import React, { useState } from 'react';
import '../../components/ItemDetail/styles.css'
import ItemCount from '../../components/ItemCount';
import {Link} from 'react-router-dom'
import {useCartContext} from '../../context/CartContext'

function ItemDetail(  {item}  ) {

    const [productQty,SetProductQty]=useState(null);
    const { addItemToCart } =useCartContext();



    function addCart(quantityToAdd){
        SetProductQty(quantityToAdd);
        addItemToCart(item,quantityToAdd)
    };

    return (
        <div className='item-container'>
            <div className='itemDetail-card'>
                <div className='itemDetail-title'>
                    <h4>{item.title}</h4>
                </div>
                <div>
                    <Link to={`/item/${item.id}`}>
                        <img className='itemDetail-img'
                            src={item.image}
                            alt={item.title} />
                    </Link>
                </div>
                <div className='itemDetail-info'>
                    <p className='itemDetail-description'>{item.description}</p>
                    <p className='itemDetail-price'>${item.price}</p>
                </div>
            </div>
            <div className='itemCount-Container'>
            {productQty==null || productQty===0?
            <ItemCount stock={item.stock} initial={0} onAdd={addCart} />:
            <div>
            <Link to='/cart'><button className='finishPurchase-btn'>Ir al carrito</button></Link>
            <Link to='/'><button className='finishPurchase-btn'>Continuar Comprando</button></Link></div>
            }
            </div>
        </div>
    );
}

export default ItemDetail;