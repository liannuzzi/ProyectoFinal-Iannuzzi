import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore';
import ItemDetail from '../../components/ItemDetail';
import './styles.css'


function getItem (id) {

    const db=getFirestore();
    const itemCollection=collection(db,"items");
    const q=query(
        itemCollection,
        where('__name__','==',id)
    );

    return getDocs(q)
}

function ItemDetailContainer() {

    const [product,setProduct]=useState({});
    const {id}=useParams();
    
    useEffect(() => {
        getItem(id)
        .then(snapshot=>{
            setProduct(
                {...snapshot.docs[0].data(),id:snapshot.docs[0].id}
            )
        });
        }, []);
    return ( 
        <div className='itemDetail-container'>
            <div>
                <ItemDetail item={product}/>
            </div>
        </div>
     );
}

export default ItemDetailContainer;
