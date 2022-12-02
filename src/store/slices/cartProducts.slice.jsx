import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfing';
import { setIsLoading } from './isLoading.slice';
export const mySlice = createSlice({
    name: 'cartProducts',
    initialState: [],
    reducers: {
      setCarProducts : (state, action) => {
        return action.payload
      }

    }
})


export const getCartThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(`https://e-commerce-api.academlo.tech/api/v1/cart`, getConfig())
    .then((res) => dispatch(setCarProducts(res.data.data.cart.products)))
    .finally(() => dispatch(setIsLoading(false)));
};

export const getToCartThunk = (data) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .post(`https://e-commerce-api.academlo.tech/api/v1/cart`,data, getConfig())
    .then((res) => dispatch( getCartThunk()))
    .finally(() => dispatch(setIsLoading(false)));
};

export const getDeletCartThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .post(`https://e-commerce-api.academlo.tech/api/v1/cart/${id}`, getConfig())
    .then((res) => dispatch( getCartThunk()))
    .finally(() => dispatch(setIsLoading(false)));
};


 export const getCheckoutCartThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
   .post(`https://e-commerce-api.academlo.tech/api/v1/purchases`,{},getConfig())
    .then(() => dispatch( setCarProducts([])))
    .finally(() => dispatch(setIsLoading(false)));
};

export const {  setCarProducts } = mySlice.actions;

export default mySlice.reducer;
