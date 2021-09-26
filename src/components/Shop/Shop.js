import React, { useState, useEffect } from 'react';
import Driver from '../Driver/Driver';
import './Shop.css'

const Shop = () => {
    const [drivers, setDrivers] = useState([]);

    useEffect(() => {
        fetch('./drivers.json')
            .then(res => res.json())
            .then(data => setDrivers(data))
    }, []);

    return (
        <div className="shop-container">
            <div className="drivers-container">
                {
                    drivers.map(driver => <Driver
                        key={driver.name}
                        driver={driver}
                    ></Driver>)
                }
            </div>
            <div className="cart-container">
                <h1>Total Added</h1>
            </div>
        </div>
    );
};

export default Shop;


