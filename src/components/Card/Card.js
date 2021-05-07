import React from 'react';
import './Card.css';

const Card = ({head,value})=>{
    return(
        <div className='Card'>
            <h2>{head}</h2>
            <p>{value}</p>
        </div>
    );
}

export default Card;