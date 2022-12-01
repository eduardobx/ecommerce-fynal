import { configureStore } from '@reduxjs/toolkit'
import cartProductsSlice from './slices/cartProducts.slice'

import isLoadingSlice from './slices/isLoading.slice'
import  productsSlice  from './slices/prodcuts.slice'
import purchasesSlice from './slices/purchases.slice'


export default configureStore({
    reducer: {
        products : productsSlice,
        isLoading: isLoadingSlice,
        purchases: purchasesSlice,
        cartProducts:  cartProductsSlice
    }
})
