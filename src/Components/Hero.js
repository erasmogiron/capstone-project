import React from "react";
import HeroImage from '../images/hero-image.jpg';

export default function Hero() {
    return (
        <>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <a href="#" role="button" className="primary-button">Reserve a Table</a>
        <img src={HeroImage} alt="" />
        </>
    )
}