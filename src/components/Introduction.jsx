import React from 'react';
import introMockup from "../images/illustration-1.svg";
import Form from './Form';

function Introduction() {
    return (
        <div className='intro'>
            <div className='intro-data'>
                <h1>All your files in one secure location, accessible anywhere.</h1>
                <p className='description'>Fylo stores your most important files in one secure location.
                    Access them wherever you need, share and collaborate with friends,
                    family, and co-workers.</p>
                <Form placeholder="Enter your email..." buttonTitle="Get Started"/>
            </div>
            <img src={introMockup} />
        </div>
    )
}

export default Introduction;