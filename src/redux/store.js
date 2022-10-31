import React from 'react'
import { createStore } from 'redux'
import { rootreducer } from './rootReducer'
import {  configureStore , getDefaultMiddleware} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import productSaga from './productSaga';

const dummyStore =()=>{
    return 100
}
// const store = createStore(
// //     ()=>{
// //     return 100;
// // }
// // dummyStore
// rootreducer
// )

const sagaMiddleware = createSagaMiddleware() ;

const middleware = [...getDefaultMiddleware() , sagaMiddleware]
const store = configureStore({
    reducer: rootreducer ,
    middleware,
})

sagaMiddleware.run(productSaga)
export default store