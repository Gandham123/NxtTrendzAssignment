import {configureStore} from '@reduxjs/toolkit';
import primeProductReducer from './features/PrimeProducts';
import CartReducer from './features/CartManage';
const Store=configureStore({
    reducer:{
        primeProducts: primeProductReducer, 
        cartProducts:CartReducer
    }
})
export default Store;