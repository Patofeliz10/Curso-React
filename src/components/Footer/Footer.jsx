import React from "react";
import "./Footer.css";


function Footer() {
    return (
        <section className="footer">
            <div className="footer-container">
                <div className="columns">
                    <div>
                        <h4>LOCATION</h4>
                        <p>" Avenida Siempre 742 "
                         <br/>
                         " Merluzo, M0 1611"   
                        </p>
                    </div>
                    <div className="redes">
                    <h4>AROUND THE WEBS</h4>
                </div>
                <div>
                    <h4>About Freelancer</h4>
                    <p>
                    Freelance is a free to use, MIT licensed Bootstrap theme created by
                     <a href="http://startbootstrap.com">Start Bootstrap</a>
                    </p>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;