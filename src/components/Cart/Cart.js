import React from 'react';
import { Table } from 'react-bootstrap';
import './Cart.css'

const Cart = (props) => {

    const { cart } = props;
    let total = 0;
    for (const driver of cart) {
        total = total + driver.salary;

    }

    return (
        <div>
            <h1 className="cart-title">Cart</h1>
            <br />
            <h2 className="total-driver-added">Total Drivers Added: {props.cart.length}</h2>
            <h3>Total Cost: ${total}</h3>
            <br />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {
                            cart.map(driver => <p>{driver.name}</p>)
                        }
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default Cart;