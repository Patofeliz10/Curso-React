import React from "react";
import Cosito from "../Cosito/Cosito";
import "./Portfolio.css";



function Portfolio() {
    return (
        <section className="portfolio">
            <div className="Portfolio-container">
                <h2 className="titulo">Portfolio</h2>
                    <Cosito/>
                      <div className="Container-perros">
                        <div>
                            <ul>
                                <li><img src="caracal.png" alt="" /><h3>Perro fachero</h3></li>
                                <li><img src="caracal.png" alt="" /><h3>Perro fachero</h3></li>
                                <li><img src="caracal.png" alt="" /><h3>Perro fachero</h3></li>
                                <li><img src="caracal.png" alt="" /><h3>Perro fachero</h3></li>
                                <li><img src="caracal.png" alt="" /><h3>Perro fachero</h3></li>
                                <li><img src="caracal.png" alt="" /><h3>Perro fachero</h3></li>
                            </ul>
                        </div>
                    </div>
            </div>
        </section>
    )
}

export default Portfolio;