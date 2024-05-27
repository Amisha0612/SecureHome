import React from 'react';

function Card(props){
    return(
        <>
        <div className='cardNew'>
            <img src={props.image} alt='img' />
            <p className='paraNew'>{props.text}</p>
            <p className='paraOne'>{props.textNew}</p>
        </div>
        </>
    )
}

export default Card;