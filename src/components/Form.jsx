import React, { useState } from "react";

function Form(props) {
    const [input, setInput] = useState("");
    const [isError, setIsError] = useState(false);
    const validateEmail = (email) => {
        const regex =
            /^([a-zA-Z0-9\+\_\-\.])+\@([a-zA-Z0-9\-]+\.)+([a-zA-Z0-9]{2,4})+$/;
        return email.match(regex) ? setIsError(false) : setIsError(true);
    };

    return (
        <form>
            <div>
                <input name="email" type="email" placeholder={props.placeholder} style={
                    isError
                        ? { border: "1px solid hsl(0, 100%, 63%)" }
                        : { border: "1px solid hsl(192, 100%, 9%)" }
                } />
                <span className="form-error"
                style={isError ? { display: "block" } : { display: "none" }}>
                Please check your email
            </span>
            </div>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    validateEmail(input);
                }}>
                {props.buttonTitle}
            </button>
        </form>
    )
}

export default Form;