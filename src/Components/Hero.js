import React from "react";
import HeroImage from '../images/hero-image.jpg';

export default function Hero() {
    return (
        <section className="hero full-container">
            <div className="container">
                <div className="row grid">
                    <div className="col site-welcome">
                        <h1 className="primary display-title">Little Lemon</h1>
                        <h2 className="sub-title">Chicago</h2>
                        <p className="lead-text">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <a href="/" className="primary-button lead-text">Reserve a Table</a>
                    </div>
                        <img src={HeroImage} alt="" className="round offset"/>
                </div>
            </div>
        </section>
    )
}