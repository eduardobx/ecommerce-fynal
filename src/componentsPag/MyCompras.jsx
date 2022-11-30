import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPurchassesThunk } from "../store/slices/purchases.slice";

const MyCompras = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPurchassesThunk());
  }, []);

  const purchasses = useSelector((state) => state.purchases);
  console.log(purchasses);
  return (
    <div className="conteiner-purchases">
      <div >
        <div  className="pucharses-options">
          <Link to={"/"}><h3>Products</h3></Link> 
          <p >
            {" "}
            <b className="color-tilte">purchases</b>
          </p>
        </div>
        <h2 className="my">My purchases</h2>
        <ul >
          {purchasses.map((purchas) => (
            <li className="purchases-item">
              {" "}
             <p>  {purchas.cart.createdAt}</p>
              {purchas.cart.products.map((index) => (
                <ul>
                  <Link to={`/products/${index.id}`}>
                   

                      <li className="purchases-producut" > 
                         <p>{index.title}</p>
                         <ul><li> preci: $ {index.price}</li>
                         <li> time : {index.updatedAt}</li></ul>
                          <p className="quantity">{index.productsInCart?.quantity}</p>
                           {console.log(index.productsInCArt?.quantity)}
                      </li>
                    
                  </Link>
                </ul>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyCompras;
