import React from 'react';
import { useCartContext } from '../../context/CartContext';
import CartItem from '../CartItem';
import '../Cart/styles.css'
import {Link} from 'react-router-dom';


function Cart () {

    const { cartList,cartTotal,clear,totalCartItems } = useCartContext();

    return ( 
        <div className='cart-container'>
            <div className='cartItem-div'> 
                {cartList.map(item=><CartItem item={item} key={item.id}/>)}
            </div>
            {cartList.length!==0?
            <div className='bottom-cart'>
                <div>
                    <button className='cart-btns' onClick={()=>clear()}>Limpiar carrito</button>
                </div>
                <div className='totalizadores-container'>
                    <p>Total items: {totalCartItems()}</p>
                    <p>Total: ${cartTotal()}</p>
                </div>
            </div>
            :
            <div className='noItems-container'>   
            <h2>No hay items en el carrito</h2>
            <Link to={'/'}><button className='cart-btns'>Volver el catálogo</button></Link>
            </div>
            }
        </div>
     );
}

export default Cart ;