import { put, takeEvery } from 'redux-saga/effects'
import { GET_PRODUCT_LIST, SET_PRODUCT_LIST } from './constants'
import { setProductList } from './productsAction';

//watcher saga
function* productSaga(){
    console.log("inside watcher saga");
    yield takeEvery(GET_PRODUCT_LIST , getProducts)
}

// worker saga 
function* getProducts(){
    const data = yield fetch("http://localhost:5000/productList");
    const products  = yield data.json();
    yield put(setProductList(products))
}
export default productSaga