import React from "react";
import Cosito from "../Cosito/Cosito";
import "./About.css";

function About() {
    return (
        <section className="about">
            <div className="about-container">
                <h2>SOBRE MI XD</h2>
                <Cosito/>
                <div className="row">
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi sed consectetur ipsum reiciendis enim. Aspernatur porro cumque sed temporibus debitis atque ratione optio, magnam rerum molestiae at odio quasi voluptatum!</p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                         Dolor tenetur ipsam veniam ratione esse a magni in expedita excepturi laboriosam, 
                         rerum ut odio quidem provident necessitatibus eum sapiente sed optio?
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;