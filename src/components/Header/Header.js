import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <h1 className="header">Truck <span>Driver's</span> Hub</h1>
            <nav>
                <a href="/home">Home</a>
                <a href="/markets">Markets</a>
                <a href="/policies">Policies</a>
                <a href="about">About us</a>
                <input type="text" placeholder="search your driver" />
                <button>Search</button>
                <p className="total-bugget">Total Bugget: $100000</p>
            </nav>
        </div>
    );
};

export default Header;