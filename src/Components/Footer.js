import React from "react";
import logo from '../images/logo.svg';
import FacebookSocial from '../images/facebook.png';
import InstagramSocial from '../images/instagram.png';
import TwitterSocial from '../images/twitter.png';
import YouTubeSocial from '../images/youtube.png';
import {NavLink} from "react-router-dom";

export default function Footer() {
    return(
        <footer>
            <div className="container">
                <div className="row grid">
                    <div className="col address">
                        <img src={logo} alt="" />
                        <address>
                        3325 N Southport Ave<br />
                        Chicago, Illinois 60657
                        </address>
                        <a href="tel:5555554321">(555) 555-4321</a>
                        <h4>Hours</h4>
                        <p>M-F 10am-9pm<br />
                        Sa-Su 11am-10pm</p>
                    </div>
                    <div className="col social-media">
                        <ul>
                            <li><a href="https://www.facebook.com/" target="_blank"><img src={FacebookSocial} alt=""/> Facebook</a></li>
                            <li><a href="https://www.instagram.com/" target="_blank"><img src={InstagramSocial} alt=""/> Instagram</a></li>
                            <li><a href="https://www.twitter.com/" target="_blank"><img src={TwitterSocial} alt=""/> Twitter</a></li>
                            <li><a href="https://www.youtube.com/" target="_blank"><img src={YouTubeSocial} alt=""/> YouTube</a></li>
                        </ul>
                    </div>
                    <div className="col footer-nav">
                        <nav role="navigation">
                            <ul className="secondary-navigation">
                                <li><NavLink to="/" className="nav-item">Home</NavLink></li>
                                <li><NavLink to="/about" className="nav-item">About</NavLink></li>
                                <li><NavLink to="/menu" className="nav-item">Menu</NavLink></li>
                                <li><NavLink to="/reservations" className="nav-item">Reservations</NavLink></li>
                                <li><NavLink to="/order-online" className="nav-item">Order Online</NavLink></li>
                                <li><NavLink to="/login" className="nav-item">Login</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    )
}
