import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
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

  console.log(productsSuggestions);
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
          <div class="product-description">
            <p>{productId.description}</p>
            <div className="product-options">
              <div class="flex">
                <div class="price">
                  <span class="label">Price</span> <br />
                  <span class="amount">$ 1198.00</span>
                </div>
                <div class="quantity1">
                  <div class="label">Quantity</div> 
                  <div class="flex2">
                    <button  className="min-max" disabled="">
                       <p >min</p>
                    </button>
                    <div class="value">1</div>
                    <button className="min-max ">
                      <p >max</p>
                    </button>
                  </div>
                </div>
              </div>
              <button class="add-cart-button">
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
{
  /* <div class="product-data">
<div class="product-options">
  <div class="flex">
    <div class="price">
      <span class="label">Price</span>
      <span class="amount">$ 1198.00</span>
    </div>
    <div class="quantity">
      <div class="label">Quantity</div>
      <div class="flex">
        <button disabled="">
          <i class="icon-minus"></i>
        </button>
        <div class="value">1</div>
        <button>
          <i class="icon-plus"></i>
        </button>
      </div>
    </div>
  </div>
  <button class="add-cart-button">
    Add to cart <i class="icon-shopping-cart"></i>
  </button>
</div>
<p class="product-description">{pr.description}</p>
</div> */
}
