import React from 'react';
import './Card.css';

const Card = (props) => {

    return (
        <div className='card' id={props.image} style={{
            backgroundImage: `url(${props.image})`,
        }}>
        </div>
    )
}

export default Card;