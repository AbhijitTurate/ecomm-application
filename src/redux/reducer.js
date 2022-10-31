import React from 'react'
import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from './constants';
let initialState =[]
export const cartReducer = ( state = initialState , action) => {
   
   const {type , payload} = action;
   console.log("Payload:" , payload);
    switch(type){
        case ADD_TO_CART:
            return [...state , payload];
        case REMOVE_FROM_CART:
            let cartDataCopy  = [...state];
            cartDataCopy = cartDataCopy.filter((product)=> {

                console.log("id:"  , product.id ,  payload)
             return product.id !== payload
            }
            );
            console.log("cartdata-----" , cartDataCopy)
            return cartDataCopy;
        case EMPTY_CART:
            state=[];
            return state
        default:
            return state
    }

    
}
