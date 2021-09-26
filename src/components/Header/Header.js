import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <h1 className="header">Truck <span>Driver's</span> Hub</h1>
            <h2 className="header-text">"Choose Your Driver and Hire Them"</h2>
            <nav>
                <a href="/home">Home</a>
                <a href="/markets">Markets</a>
                <a href="/policies">Policies</a>
                <a href="about">About us</a>
                <input type="text" placeholder="search your driver" />
                <button>Search</button>
            </nav>
            <p className="total-bugget">Total Budget: $100000</p>
        </div>
    );
};

export default Header;