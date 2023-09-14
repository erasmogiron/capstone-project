import React from "react";
import logo from '../images/logo.svg';
import Nav from './Nav';

export default function Header() {
    return(
        <header>
        <img src={logo} alt="Little Lemon" />
        <Nav />
        </header>
    )
} 