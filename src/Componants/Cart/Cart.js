import React from 'react';

const Cart = (props) => {
    const cart = props.cd;
    let total=0;
    for(let i=0; i<cart.length; i++){
        total+=cart[i].price;
    }
   let text=(total/10).toFixed(2);

 
    return (
        <div>
           <h2>Order Summary</h2> 
           <h4>item ordered: {cart.length}</h4>
           
           <p>Tax :{text}</p>
           <h5>Total: {(total+parseFloat(text)).toFixed(2)}</h5>
        </div>
    );
};

export default Cart;