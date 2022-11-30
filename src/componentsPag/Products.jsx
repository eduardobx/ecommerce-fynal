import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterCategorisThumk, getproductsThunk, nameProductsThumk } from "../store/slices/prodcuts.slice";
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";




const Products = () => {
  const [ toggle,setToggle]=useState(false)
   const [category, setCategory]=useState([])
   const[searchProduct,setSearchProduct]=useState("")
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getproductsThunk());
    
    axios.get("https://e-commerce-api.academlo.tech/api/v1/products/categories")
    .then(res => setCategory(res.data.data.categories
      ))

  }, []);

  console.log(toggle)
  const products = useSelector((state) => state.products);
 
  return (
    <div className="conteniner-options">
      <div className="span"></div>
      <div className="conteiner-category">
        <div>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Price</Accordion.Header>
              <Accordion.Body>
                <ListGroup as="ul">
                  <ListGroup.Item as="li" active>
                    <label htmlFor="precimax">max</label>{" "}
                    <input id="precimax" type="number" />
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    <label htmlFor="precimax">max</label>{" "}
                    <input id="precimax" type="number" />
                  </ListGroup.Item>
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div>
          <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="1">
              <Accordion.Header>Categorys</Accordion.Header>
              <Accordion.Body>
                <ListGroup as="ul">

                   <ListGroup.Item as="li">{category.map(name =>(
                   <p  className="categorys-buton"onClick={()=>dispatch(filterCategorisThumk(name.id))}key={name.name}> {name.name}</p>
                   ))}
                     <button onClick={()=> dispatch(getproductsThunk())}>all</button>
                   </ListGroup.Item>
                
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>

      <div className="conteiner-products">
       <div className="btn">
         <input  onChange={( e) => {setSearchProduct (e.target.value)}}   value={searchProduct} className="input-product" type="text"  placeholder="waht are you looking for" />
        <button onClick={()=>dispatch(nameProductsThumk(searchProduct))}> search</button>
       </div>
          <ul className="products-card" >
          {products.map((product) => (
        
          
          <li key={product.id} className="conteiner-img">
            <Link to={`/products/${product.id}`} className="conten-img" > 
              {/* onMouseOver={()=>setToggle(true)} onMouseOut={()=>setToggle(false)} */}
              
             <img className="img-p " src={product?.productImgs[0]} alt=""    />
             {/* <img className={toggle?"none-opacity": "img-p opacity"} src={product?.productImgs[1]} alt="" /> */}
             </Link>
            <div className="info">
            <strong>{product.title}</strong> <br />
            <span>Price</span> <br />
            <span>$ {product.price}</span>
            </div>
          </li>
          
       
      ))}
         </ul>
      
      </div>
    </div>
  );
};

export default Products;
