import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

export const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProduts: ( state ,action)=>{
            return action.payload
            
        }
    }
})
 export const getproductsThunk=()=> dispatch =>{
    dispatch(setIsLoading(true))
    axios.get("https://e-commerce-api.academlo.tech/api/v1/products")
    .then(res => dispatch(setProduts(res.data.data.products)))
    .finally(() => dispatch(setIsLoading(false)))
    
 }

 export const filterCategorisThumk=(id)=> (dispatch) =>{
    dispatch(setIsLoading(true))
   return axios.get(`https://e-commerce-api.academlo.tech/api/v1/products?category=${id}`)
    .then(res => dispatch(setProduts(res.data.data.products)))
    .finally(() => dispatch(setIsLoading(false)))
    
 }
 export const nameProductsThumk=(searchProduct)=> (dispatch) =>{
    dispatch(setIsLoading(true))
    return axios.get(`https://e-commerce-api.academlo.tech/api/v1/products?query=${searchProduct}`)
    .then(res => dispatch(setProduts(res.data.data.products)))
    .finally(() => dispatch(setIsLoading(false)))
   
 }
 
 



export const {  setProduts } = productsSlice.actions;

export default productsSlice.reducer;
