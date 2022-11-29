import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getproductsThunk } from '../store/slices/prodcuts.slice';

const ProductDetail = () => {
    const [productId, setProductId]=useState({})

    const  {id}=useParams();

    const dispatch = useDispatch();
     useEffect(() => {
       dispatch(getproductsThunk());
    }, []);
     
     useEffect(()=>{

        axios.get(`https://e-commerce-api.academlo.tech/api/v1/products/${id}`)
         .then(res => setProductId(res.data.data.product) )
         
     },[])
     

     const products = useSelector((state) => state.products);
     const  productsSuggestions= products.filter(index => index.category.name==productId.category)
  return (
    <div className='conteiner-product-detail'>
      <h1>{productId.title}</h1>
      
         <img src={productId?.productImgs?.[0]} alt="" /> 
    </div>
  );
};

export default ProductDetail;