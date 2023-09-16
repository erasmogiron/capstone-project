import React from "react";
import HeroImage from '../images/hero-image.jpg';
import {Link} from "react-router-dom";

export default function Hero() {
    return (
        <section className="hero full-container">
            <div className="container">
                <div className="row grid">
                    <div className="col site-welcome">
                        <h1 className="primary display-title">Little Lemon</h1>
                        <h2 className="sub-title">Chicago</h2>
                        <p className="lead-text">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <Link to="/reservations" className="nav-item lead-text primary-button">Reserve a Table</Link>
                    </div>
                        <img src={HeroImage} alt="" className="round offset"/>
                </div>
            </div>
        </section>
    )
}