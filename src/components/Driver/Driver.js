import React from 'react';
import './Driver.css'


const Driver = (props) => {
    console.log(props.driver)
    const { name, age, img, city, rating, salary } = props.driver;
    return (
        <div className="driver-card">
            <img className="card-image" src={img} alt="" />
            <div className="driver-details">
                <h2>{name}</h2>
                <h4>Age: {age}</h4>
                <p>City: {city}</p>
                <p>Rating: {rating}</p>
                <h3>Salary: {salary}</h3>
                <button>Hire Now</button>
            </div>
        </div>
    );
};

export default Driver;