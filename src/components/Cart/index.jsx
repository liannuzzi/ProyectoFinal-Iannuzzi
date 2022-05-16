import React from 'react';
import { useCartContext } from '../../context/CartContext';
import CartItem from '../CartItem';


function Cart () {

    const { cartList } = useCartContext();

    // console.log('Esta es la cart list' + cartList[0].title)

    return ( 
        <div>
            {cartList.map(item=><CartItem item={item} key={item.id}/>)}
        </div>
     );
}

export default Cart ;