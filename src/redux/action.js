import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constants";

const addToCart = (product)=>{

    console.log("Product details:", product);
    return{
        type:ADD_TO_CART,
        payload:product
    }
}

const removeFromCart = (id)=>{
    return {
        type: REMOVE_FROM_CART,
        payload:id
    }
}
const emptyCart = ()=>{
    return {
        type:EMPTY_CART
    }
}

export {addToCart , emptyCart , removeFromCart};