import React from "react";
import footerLogo from "../images/footerLogo.svg";
import iconPhone from '../images/icon-phone.svg';
import iconMail from '../images/icon-email.svg';
import Contact from "./Contact";
import FooterLinks from "./FooterLinks";
import IconsSocial from "./IconsSocial";

function Footer() {
    return (
        <footer>
            <div>
                <img src={footerLogo} alt="logo" />
            </div>
            <div className="footer-info">
                <section>
                    <Contact icon={iconPhone} contact="Phone: +1-543-123-4567" />
                    <Contact icon={iconMail} contact="example@fylo.com" />
                </section>
                <section>
                    <FooterLinks title="About Us" link="#" />
                    <FooterLinks title="Jobs" link="#" />
                    <FooterLinks title="Press" link="#" />
                    <FooterLinks title="Blog" link="#" />
                </section>
                <section>
                    <FooterLinks title="Contact Us" link="#" />
                    <FooterLinks title="Terms" link="#" />
                    <FooterLinks title="Privacy" link="#" />
                </section>
                <IconsSocial />
            </div>
        </footer>
    )
}

export default Footer;