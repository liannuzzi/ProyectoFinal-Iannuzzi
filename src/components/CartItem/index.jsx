import React from 'react';

function CartItem ({item}) {
    return ( 
        <div>
            <h1>{item.title}</h1>
        </div>
     );
}

export default CartItem ;