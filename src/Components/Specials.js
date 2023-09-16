import React from "react";
import { Link } from "react-router-dom";

export default function Specials() {
    return (
            <header className="container">
                <div className="row flex">
                    <h2 className="display-title">This Weeks Specials!</h2>
                    <Link to="/menu" className="nav-item lead-text primary-button">Online Menu</Link>
                </div>
            </header>
    )
}