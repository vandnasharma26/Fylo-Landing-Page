import React from "react";
import Form from './Form'

function Access() {
    return (
        <div className="contact">
            <div className="c1">
                <h1>Get early access today</h1>
                <p>It only takes a minute to sign up and our free starter tier is extremely generous.
                    If you have any questions, our support team would be happy to help you.</p>
            </div>
            <Form placeholder="example@email.com" buttonTitle="Get Started for free"/>
        </div>
    )
}

export default Access;