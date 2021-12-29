import React from "react";

function Contact(props) {
    return (
        <div className="footer-info-contact">
            <img src={props.icon} />
            <p>{props.contact}</p>
        </div>
    )
}

export default Contact