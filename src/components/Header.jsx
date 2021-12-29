import React from 'react';
import headerLogo from "../images/logo.svg";

function Header(){
    return (
        <header>
            <img src={headerLogo} alt="logo" />
            <div className="header-links">
                <a href="#"><span>Features</span></a>
                <a href="#"><span>Team</span></a>
                <a href="#"><span>Sign In</span></a>
            </div>
        </header>
    )
}

export default Header;