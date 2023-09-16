import React from "react";
import logo from '../images/logo.svg';
import Nav from './Nav';
import { Link } from "react-router-dom";

export default function Header() {
    return(
        <header className="container">
            <div className="row flex">
                <Link to="/"><img src={logo} alt="Little Lemon" /></Link>
                <Nav />
            </div>
        </header>
    )
}