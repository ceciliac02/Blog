import React from 'react';

const Form = () => {
    return (
        <div className="form">
            <form className="emailForm">
                <p>Sign up to our newsletter!</p>
                <input id="fname" placeholder="First Name" type="text" />
                <input id="lname" placeholder="Last Name" type="text" />
                <input type="email" name="email" id="email" placeholder="youremail@site.com" />
                <div id="formBtn">Send</div>
            </form>
        </div>
    )
}

export default Form;