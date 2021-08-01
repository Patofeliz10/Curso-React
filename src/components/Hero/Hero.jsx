import React from "react";
import "./Hero.css";
import avatar from "./avatar.jpg";
import Cosito from "../Cosito/Cosito";

const Hero= () => {
    return (
        <section className="Soy">
            <div className="Hero-container">
                <img className="avatar" src={avatar} width="150px" alt="" />
                <h1 className="hero-titulo">Merluzo</h1>
                <Cosito/>
                <h2>Perro - Le gusta la merluza - Mira al piso</h2>
            </div>
        </section>
    )
}

export default Hero;