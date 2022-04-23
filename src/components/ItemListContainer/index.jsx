import React from 'react';
import '../ItemListContainer/styles.css';
import ItemCount from '../ItemCount';

function ItemListContainer (props) {

    return ( 
        <div className='itemList-container'>
            <div className='greeting-container'>
            <h1 className='item-list-greeting'>{props.greeting}</h1>
            </div>
            <ItemCount stock={10} initial={0} />
        </div>    
     );
}

export default ItemListContainer;