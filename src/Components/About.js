import React from "react";
import AdrianMario from '../images/adrian-and-mario.jpg';

export default function About() {
    return (
            <section className="container">
                <div className="row grid">
                    <div className="col description">
                        <h2 className="display-title">Meet the Owners</h2>
                        <h3 className="section-title">Adrian and Mario</h3>
                        <p>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy.</p>
                        <p>Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.</p>
                        <a href="/" className="primary-button lead-text">Read Our Story</a>
                    </div>
                    <div className="col media">
                        <img src={AdrianMario} alt="Adrian and Mario at Little Lemon restaurant kitchen" />
                    </div>
                </div>
            </section>
    )
}