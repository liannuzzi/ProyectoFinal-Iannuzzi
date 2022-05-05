import React from 'react';
import '../../components/ItemDetail/styles.css'
import {Link} from 'react-router-dom'

function ItemDetail( { item } ) {
    return (
        <div className='itemDetail-card'>
            <div className='itemDetail-title'>
                <h4>{item.title}</h4>
            </div>
            <div>
                <Link to={`/item/${item.id}`}>
                    <img className='itemDetail-img'
                        src={require(`../../images/Productos/${item.image}`)}
                        alt="" />
                </Link>
            </div>
            <div className='itemDetail-info'>
                <p className='itemDetail-description'>{item.description}</p>
                <p className='itemDetail-price'>${item.price}</p>
            </div>
        </div>
    );
}

export default ItemDetail;