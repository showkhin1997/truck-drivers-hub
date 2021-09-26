import React, { useState, useEffect } from 'react';
import Cart from '../Cart/Cart';
import Driver from '../Driver/Driver';
import './Shop.css'

const Shop = () => {
    const [drivers, setDrivers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./drivers.json')
            .then(res => res.json())
            .then(data => setDrivers(data))
    }, []);

    const handaleAddToCart = driver => {
        console.log(driver)
        const newCart = [...cart, driver];
        setCart(newCart);
    }

    return (
        <div className="shop-container">
            <div className="drivers-container">
                {
                    drivers.map(driver => <Driver
                        key={driver.name}
                        driver={driver}
                        handaleAddToCart={handaleAddToCart}
                    ></Driver>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;


