import React from 'react';
import mobileCurve from '../images/bg-curve-mobile.svg';
import desktopCurve from '../images/bg-curve-desktop.svg';
import arrowIcon from '../images/icon-arrow.svg';
import mainMockup from '../images/illustration-2.svg';
import Card from './Card';
import avatar from '../images/avatar-testimonial.jpg';

function Main() {
    return (
        <div className='main-container'>
            <picture>
                <source
                    srcSet={mobileCurve}
                    media='(max-width: 700px)' />
                <img src={desktopCurve} className='curve' />
            </picture>
            <div className='section-main'>
                <div className='main'>
                    <h1> Stay productive, wherever you are </h1>
                    <p>Never let location be an issue when accessing your files. Fylo has you
                        covered for all of your file storage needs.
                    </p>
                    <p>Securely share files and folders with friends, family and colleagues for
                        live collaboration. No email attachments required!</p>
                    <span className='arrow-link'>
                        See how Fylo works
                        <a href='#'> <img src={arrowIcon} /> </a>
                    </span>
                    <Card
                        review="Fylo has improved our team productivity by an order of magnitude. Since
                        making the switch our team has become a well-oiled collaboration machine."
                        avatarImg={avatar}
                        name="Kyle Burton"
                        desc="Founder & CEO, Huddle"
                    />
                </div>
                <img src={mainMockup} className='mainMockup' />
            </div>
        </div>
    )
}

export default Main;