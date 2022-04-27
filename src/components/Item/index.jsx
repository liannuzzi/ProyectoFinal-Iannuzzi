import React from 'react';
import '../../components/Item/styles.css'
import ItemCount from '../ItemCount';

function Item ({item}) {
    return ( 
            <div className='item-card'>
                <div className='item-title'>
                    <h4>{item.title}</h4>
                </div>
                <div>
                <img className='item-img'
                src={require(`../../images/Productos/${item.image}`)}
                alt="" />
                </div>
                <div className='item-info'>
                    <p className='item-description'>{item.description}</p>
                    <p className='item-price'>${item.price}</p>
                </div>
                <div>
                    <ItemCount stock={10} initial={0} />
                </div>
            </div>
     );
}

export default Item ;