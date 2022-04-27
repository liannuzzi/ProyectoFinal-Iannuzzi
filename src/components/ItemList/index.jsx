import React from 'react';
import Item from '../Item';
import '../ItemList/styles.css';


function ItemList ({items}) {
        
    return ( 
        <div>
            <div className='itemList2'>
                {items.map((item,i)=><Item item={item} key={item.id} />)}
            </div>
        </div>
     );
}

export default ItemList ;