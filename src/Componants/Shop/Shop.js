import React, { useState } from 'react';
import { BiCard } from 'react-icons/bi';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shop.css'
const Shop = () => {
    const[cart,setcart]= useState([]);
    const handler = (product) =>{
        const newCart=[...cart,product];
        setcart(newCart);
    }
    const first10 = fakeData.slice(0,15);
    const[product,setProduct]= useState(first10);
    return (
        <div className="shop-container">
            <div className="product-container">
                 <ul>
                    {
                        product.map(data=><Product
                        product={data}
                        hd={handler}
                        ></Product>)
                    }
                 </ul>
            </div>
            <div className="cart-container">
                <Cart cd={cart}></Cart>
             </div>    
        </div>
    );
};

export default Shop;