import React from "react";
import "./Header.css";

function Header() {
    return (
        <section className="header">
            <nav className="header-container">
                <h2>Un Capoeira</h2>
                <ul className="header-nav">
                    <li><a href="#header">SOY</a></li>
                    <li><a href="#portfolio">QUE HICE</a></li>
                    <li><a href="#contacto">MATE A NISMAN</a></li>
                </ul>
            </nav>
        </section>
    )
}

export default Header;