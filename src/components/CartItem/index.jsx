import React from 'react';
import { useCartContext } from '../../context/CartContext';
import { FaTrashAlt } from 'react-icons/fa';
import '../CartItem/styles.css'


function CartItem ({item}) {

    const { removeItem } = useCartContext();


    return ( 
        <div className='cartItem-container'>
            <div className='cartItem'>
                <h4>{item.title}</h4>
                <p>Unidades: {item.quantity}</p>
            </div>
            <div>
                <button className='trash-btn' onClick={()=>removeItem(item.id)}><FaTrashAlt/></button>
            </div>
        </div>
     );
}

export default CartItem ;