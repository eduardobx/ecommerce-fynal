import React, { useEffect } from "react";

import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartThunk, getCheckoutCartThunk, getDeletCartThunk } from "../store/slices/cartProducts.slice";

const CartSidebar = ({ handleClose, show }) => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cartProducts);

  useEffect(() => {
    dispatch(getCartThunk());
  }, []);

  return (
    <div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h4>Shopping cart</h4>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="conteiner-potion-fixet">
          <ul>
            {cartProducts.map((index) => (
              <li key={index.id} className="conteiner-shop">
                <section className="conteiner-shoping">
                  <div className="conteiner-to">
                    <span>{index.brand}</span>
                    <Link to={`/products/${index.id}`}> {index.title}</Link>
                    <div className="border-cant">{index.productsInCart.quantity}</div>
                  </div> 
                   
                  <button onClick={()=>dispatch(getDeletCartThunk(index.id ))} className="btn4"><i class="fa-regular fa-trash-can"></i></button>
                </section>
                <div className="total">
                  <span>total     : </span>
                  <b>{index.productsInCart.quantity*index.price}</b>
                </div>
               
              </li>
            ))}

           < div className="potion-fixet">

              <h4> <b> total</b> </h4>
                <button className="add-cart-button" onClick={()=> dispatch (getCheckoutCartThunk())} >
                    Add to cart 
                     </button>
                </div>

          </ul>
               
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default CartSidebar;
