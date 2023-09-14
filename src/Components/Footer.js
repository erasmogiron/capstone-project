import React from "react";
import logo from '../images/logo.svg';
import FacebookSocial from '../images/facebook.png';
import InstagramSocial from '../images/instagram.png';
import TwitterSocial from '../images/twitter.png';
import YouTubeSocial from '../images/youtube.png';

export default function Footer() {
    return(
<footer>
            <div className="row">
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
                    <li><img src={FacebookSocial} alt=""/> Facebook</li>
                    <li><img src={InstagramSocial} alt=""/> Instagram</li>
                    <li><img src={TwitterSocial} alt=""/> Twitter</li>
                    <li><img src={YouTubeSocial} alt=""/> YouTube</li>
                    </ul>
                </div>
                <div className="col footer-nav">
                    <nav role="footer-navigation">
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Menu</li>
                            <li>Reservations</li>
                            <li>Order Online</li>
                            <li>Login</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
} 
