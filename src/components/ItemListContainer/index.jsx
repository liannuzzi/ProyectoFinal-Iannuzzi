import React from 'react';
import '../ItemListContainer/styles.css';

function ItemListContainer (props) {
    return ( 
        <div className='greeting-container'>
            <h1 className='item-list-container'>{props.greeting}</h1>
        </div>
     );
}

export default ItemListContainer;