import { GET_PRODUCT_LIST, SET_PRODUCT_LIST } from "./constants"


const productList =()=>{
    const data = " helloo"
    return {
        type : GET_PRODUCT_LIST,
    }
}

const setProductList = (payload)=>{
    return{
        type : SET_PRODUCT_LIST,
        payload
    }
}
export {productList , setProductList}