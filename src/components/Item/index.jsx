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
                    src={item.image}
                    alt={item.title} />
                </Link>
                </div>
                <div className='item-info'>
                    <p className='item-description'>{item.description}</p>
                    <p className='item-price'>${item.price}</p>
                </div>
                <div>
                    <Link to={`/item/${item.id}`}>    
                        <button>
                            Ver Detalle
                        </button>
                    </Link>
                </div>
            </div>
     );
}

export default Item ;