import React from 'react';
import { Link } from 'react-router-dom';
import '../../components/Item/styles.css'
import ItemCount from '../ItemCount';

function Item ({item}) {
    return ( 
            <div className='item-card'>
                <div className='item-title'>
                    <h4>{item.title}</h4>
                </div>
                <div>
                <Link to={`/item/${item.id}`}>    
                    <img className='item-img'
                    src={require(`../../images/Productos/${item.image}`)}
                    alt="" />
                </Link>
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