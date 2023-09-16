import React from "react";
import {Link} from "react-router-dom";


const AboutItem = ({ title, owners, restaurant, ownerBio, aboutAdrian, imageSrc }) => {
   return (
        <>
                <div className="col description">
                    <h2 className="display-title">{title}</h2>
                    <h3 className="section-title">{owners}</h3>
                    <p>{restaurant}</p>
                    <p>{ownerBio}</p>
                    <p>{aboutAdrian}</p>
                    <Link to="/about" className="primary-button lead-text">Read Our Story</Link>
                    </div>
                    <div className="col media">
                        <img src={imageSrc} alt="Adrian and Mario at Little Lemon restaurant kitchen" />
                    </div>
        </>
   );
}

export default AboutItem;
