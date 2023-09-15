import React from "react";
import logo from '../images/logo.svg';
import Nav from './Nav';

export default function Header() {
    return(
        <header className="container">
            <div className="row flex">
                <img src={logo} alt="Little Lemon" />
                <Nav />
            </div>
        </header>
    )
}