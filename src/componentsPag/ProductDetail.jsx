import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {  getToCartThunk } from "../store/slices/cartProducts.slice";
import { getproductsThunk } from "../store/slices/prodcuts.slice";

const ProductDetail = () => {
  const [productId, setProductId] = useState({});

  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getproductsThunk());
  }, []);

  useEffect(() => {
    axios
      .get(`https://e-commerce-api.academlo.tech/api/v1/products/${id}`)
      .then((res) => setProductId(res.data.data.product));
  }, []);

  const products = useSelector((state) => state.products);
  const productsSuggestions = products.filter(
    (index) => index.category.name == productId.category
  );
   const [quantity, setQuantity]=useState( 0)
   const addTocart=()=>{
      const news={
         id : productId.id,
         quantity : Number(quantity)
      }
      dispatch(getToCartThunk(news))

      setQuantity(0)
   }

    return (
    <div className="conteiner-product-detail">
      <section className="history">
        <Link to={"/"}>Home</Link>
        <div className="separator"></div>
        <b>{productId.title}</b>
      </section>
      <div className="conteiner-figure-info">
        <figure>
          <img src={productId?.productImgs?.[0]} alt="" />
        </figure>
        <div className="conteiner-info-datail">
          <h2>{productId.title}</h2>
          <div className="product-description">
            <p>{productId.description}</p>
            <div className="product-options">
              <div className="flex">
                <div className="price">
                  <span className="label">Price</span> <br />
                  <span className="amount">$ 1198.00</span>
                </div>
                <div className="quantity1">
                  <div className="label">Quantity</div> 
                  <div className="flex2">
                  
                          <input onChange={(e)=> setQuantity(e.target.value)} value={quantity} class="value" type="number" /> 
                    
                  </div>
                </div>
              </div>
              <button className="add-cart-button"  onClick={addTocart}>
                    Add to cart 
                     </button>
            </div>
          </div>
        </div>
      </div>
      <section className="suggestions-product" > 
        <p>Discover similar items</p>
        <ul className="products-card" >
          {productsSuggestions.map((product) => (
          <li key={product.id} className="conteiner-img">
            <Link to={`/products/${product.id}`} className="conten-img" > 
             
              
             <img className="img-p " src={product?.productImgs?.[0]} alt=""    />
             
             </Link>
            <div className="info">
            <strong>{product.title}</strong> <br />
            <span>Price</span> <br />
            <span>$ {product.price}</span>
            </div>
          </li>
          
       
      ))}
         </ul>
      
      </section>
    </div>
  );
};

export default ProductDetail;

