import React from "react";
import logo from '../images/logo.svg';
import FacebookSocial from '../images/facebook.png';
import InstagramSocial from '../images/instagram.png';
import TwitterSocial from '../images/twitter.png';
import YouTubeSocial from '../images/youtube.png';

export default function Footer() {
    return(
        <footer>
            <div className="row grid">
                <div className="col address">
                    <img src={logo} alt="" />
                    <address>
                    3325 N Southport Ave<br />
                    Chicago, Illinois 60657
                    </address>
                    <tel>(555) 555-4321</tel>
                </div>
                <div className="col social-media">
                    <ul>
                    <li><a href="#"><img src={FacebookSocial} alt=""/> Facebook</a></li>
                    <li><a href="#"><img src={InstagramSocial} alt=""/> Instagram</a></li>
                    <li><a href="#"><img src={TwitterSocial} alt=""/> Twitter</a></li>
                    <li><a href="#"><img src={YouTubeSocial} alt=""/> YouTube</a></li>
                    </ul>
                </div>
                <div className="col footer-nav">
                    <nav role="footer-navigation">
                        <ul className="secondary-navigation">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Menu</a></li>
                            <li><a href="#">Reservations</a></li>
                            <li><a href="#">Order Online</a></li>
                            <li><a href="#">Login</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}
