import React from 'react';
import './Product.css'
import {BiCartAlt } from "react-icons/bi";
const Product = (props) => {
   const{name,img,seller,price,stock}=props.product;

    return (
     <div class="product">
         <div class="img">
             <img src={img} alt=""/>
         </div>
         <div>
             <h1 class="name">{name}</h1>
    <p>By : {seller}</p>
<p>${price}</p>
<p> only {stock} left in-stock order soon</p>
<button class="button"
onClick={()=>props.hd(props.product)}
> <BiCartAlt/> Add to cart</button>
         </div>
     </div>
    );
};

export default Product;