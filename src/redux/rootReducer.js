import { combineReducers } from "redux";
import productReducer from "./productReducer";
import {cartReducer} from "./reducer"
export const rootreducer = combineReducers({
    cartData:cartReducer,
    products : productReducer
})

