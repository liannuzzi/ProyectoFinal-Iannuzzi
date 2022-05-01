import React from 'react';
import '../ItemDetail/styles.css'

function ItemDetail({ item }) {
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
        </div>
    );
}

export default ItemDetail;