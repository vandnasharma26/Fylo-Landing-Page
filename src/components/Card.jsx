import React from 'react';
import quote from '../images/icon-quotes.svg';
import Profile from './Profile';

function Card(props) {
    return (
        <div className='card'>
            <img src={quote} />
            <p>{props.review}</p>
            <Profile avatar={props.avatarImg} name={props.name} desc={props.desc} />
        </div>
    )
}

export default Card;