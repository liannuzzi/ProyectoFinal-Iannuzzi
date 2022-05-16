import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles.css';
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore';
import ItemList from '../../components/ItemList';



function getProducts(category){

        const db=getFirestore();
        const itemCollection=collection(db,"items");
        const q = category? 
        query(
            itemCollection,
            where('category','==',category)
        ) :
        query(
            itemCollection
        );

        return getDocs(q)

}

function ItemListContainer () {

    const[products,setProducts]= useState([]);
    const {category}=useParams();

    

    useEffect(()=>{
        getProducts(category)
        .then(snapshot=>{
            setProducts(snapshot.docs.map(doc=>{ 
                return {...doc.data(),id:doc.id} 
            }));
        })
    },[category]);
 
    return ( 
        <div className='itemList-container'>
            <ItemList items={products}/>
        </div>    
     );
}

export default ItemListContainer;