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
        <div className="cart-container">
            <div className="cart-title-total">
                <h1 className="cart-title">My Cart</h1>
                <hr />
                <br />
                <h2 className="total-driver-added">Total Drivers Added: {props.cart.length}</h2>
                <h3>Total Cost: ${total}</h3>
            </div>

            <Table striped bordered hover className="driver-name">
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