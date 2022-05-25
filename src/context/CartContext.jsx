import {createContext, useContext, useState } from "react";
import {collection, addDoc, getFirestore, Timestamp} from 'firebase/firestore';

export const CartContext=createContext({});

export function useCartContext(){
    return useContext(CartContext);
}

export function CartContextProvider({ children }){
    const [cartList,setCartList]=useState([]);


    function isInCart(id){

        return cartList.some(item=>item.id===id)

    }

    function addItemToCart(item,quantity){

        if(isInCart(item.id)){

            return setCartList(cartList.map((product)=>product.id===item.id
            ? {...product,quantity:product.quantity+quantity}
            : product
            )
        )

        };

        setCartList([...cartList,{...item,quantity}])
    };

    function removeItem(id){

      return  setCartList(cartList.filter(product=>product.id!==id))
    }

    function clear(){
        return setCartList([])
    }

    function cartTotal(){
        const total=cartList.reduce((total,product)=>total+(product.quantity*product.price),0)
        return total
    }

    function totalCartItems(){
        
        const totalItems=cartList.reduce((total,product)=>total + product.quantity,0)
        return totalItems
    }

    function purchaseConfirm(usuario){

        
        console.log(cartList)

        const db=getFirestore();
        const orderCollection=collection(db,"orders");

        const purchaseItems=cartList.map(({category,description,image,stock,... rest})=>rest)

        const order={
            buyer:{name:usuario.name, phone:usuario.phone, email:usuario.email},
            items:purchaseItems,
            date:Timestamp.fromDate(new Date()),
            total:cartTotal()
        }

        addDoc(orderCollection,order).then(({id})=>console.log('Gracias por su compra, su codigo de orden es: '+ id))
        console.log(order)
    }

    return(
        <CartContext.Provider value={{ 
            cartList,
            addItemToCart,
            removeItem,
            clear,
            cartTotal,
            totalCartItems,
            purchaseConfirm
             }}>
            {children}
        </CartContext.Provider>
    )
}

