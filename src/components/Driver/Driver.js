import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './Driver.css'
import Rating from 'react-rating';


const Driver = (props) => {
    const { name, age, img, city, rating, salary } = props.driver;
    const buttonIcon = <FontAwesomeIcon icon={faUserPlus} />

    return (
        <div className="driver-card">
            <img className="card-image" src={img} alt="" />
            <div className="driver-details">
                <h2>{name}</h2>
                <p>Age: {age}</p>
                <p>City: {city}</p>
                <p><Rating
                    initialRating={rating}
                    emptySymbol="far fa-star rating-icon"
                    fullSymbol="fas fa-star rating-icon"
                    readonly
                ></Rating> </p>
                <h3><small>Salary:</small> ${salary}</h3>
                <button onClick={() => props.handaleAddToCart(props.driver)}>{buttonIcon} <span className="button-text">Hire Now</span> </button>
            </div>
        </div>
    );
};

export default Driver;