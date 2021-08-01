import React from "react";
import Cosito from "../Cosito/Cosito";
import "./Contacto.css";

function Contacto() {
    return (
<form action="">
    <div className="contact-container">
       <h2>CONTACT ME</h2>
       <Cosito/>
        <div className="form-floating">
            <input type="text" id="name" placeholder="Enter your name..." data-sd-validation="required" data-sb-can-submit="no" />
            <div>
            <label htmlFor="name">Full Name</label>
            </div>
        </div>
        <div className="form-floating">
        <input type="text" id="mail" placeholder="Enter your Email..." data-sd-validation="required" data-sb-can-submit="no" />
            <label htmlFor="email">Email Address</label>
        </div>
        <div className="form-floating">
        <input type="text" id="phone-number" placeholder="Enter your Phone number..." data-sd-validation="required" data-sb-can-submit="no" />
            <label htmlFor="phone">Phone number</label>
        </div>
        <div className="form-floating">
            <textarea name="" id="message" cols="30" rows="10" placeholder="Enter your message here..." data-sb-validations="requiered" data-sb-can-submit="no"></textarea>
            <label htmlFor="message">Message</label>
        </div>
        <div>
            <input className="submit" type="submit" />
        </div>
    </div>
</form>
    )
}

export default Contacto;