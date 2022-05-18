import React from 'react';
import { FaPlus, FaMinus, FaShoppingCart } from 'react-icons/fa';
import {useState, useEffect} from 'react';
import '../ItemCount/styles.css';



function ItemCount ({stock,initial, onAdd}) {

    const[contador,setItemNum]= useState(initial);
    const [disabled, setDisable] = useState(true);


    const addItem = ()=> {
        if(contador < stock){
            setItemNum(contador +1);
            setDisable(false);
        }

    }

    const removeItem = ()=>{
        if(contador>0){
            setItemNum(contador-1);
            setDisable(false);
        }
            
    }
    

useEffect(()=>{
    if(contador===0){
        setDisable(true);
    }
},[contador]);


return ( 
    <div>
        <div className='container-buttons'>
        <button
        className='control-button'
        onClick={removeItem}>
            <FaMinus/>
        </button>
        <div
        className='contador'>
        {contador}
        </div>
        <button
        className='control-button'
        onClick={addItem}>
            <FaPlus/>
        </button>
        </div>
        <div>
            <button
            className={`${disabled}? toCart-button-disabled : toCart-button`}
            onClick={()=>{

                onAdd(contador);
            }}
            disabled={disabled}
            >
                <FaShoppingCart/> Agregar al carrito 

            </button>
        </div>
    </div>

     );
}


export default ItemCount ;