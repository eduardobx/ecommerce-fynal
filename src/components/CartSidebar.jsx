import React, { useEffect } from "react";

import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartThunk } from "../store/slices/cartProducts.slice";

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
                    <div className="border-cant">6</div>
                  </div> 
                   
                  <button className="btn4">delet</button>
                </section>
                <div className="total">
                  <span>total     : </span>
                  <b>$  192939</b>
                </div>
               
              </li>
            ))}
          </ul>
               <div className="potion-fixet">

              <h4> <b> total</b> : 123212</h4>
                <button class="add-cart-button">
                    Add to cart 
                     </button>
                </div>

        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default CartSidebar;
