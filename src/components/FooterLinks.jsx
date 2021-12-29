import React from "react";

function FooterLinks(props){
    return (
        <div><a href={props.link} className="footer-link">{props.title}</a></div>
    )
}

export default FooterLinks;