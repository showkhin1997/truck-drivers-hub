import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const { cart } = props;
    let total = 0;
    for (const driver of cart) {
        total = total + driver.salary;

    }

    return (
        <div>
            <h1>Cart</h1>
            <h2>Total Drivers Added: {props.cart.length}</h2>
            <h3>Total Cost: ${total}</h3>
        </div>
    );
};

export default Cart;