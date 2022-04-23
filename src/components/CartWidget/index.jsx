import React from 'react';
import '../CartWidget/styles.css';
import { FaShoppingCart } from 'react-icons/fa';


function CartWidget() {
    return ( 
        <div>
            <p className='cart-widget'><FaShoppingCart/></p>
        </div>
     );
}

export default CartWidget;

