import React from "react";
import {Link} from "react-router-dom";
import DeliveryIcon from '../images/delivery-icon.png';

const MenuItem = ({ title, alt, price, description, imageSrc }) => {
   return (
    <article className="card">
        <img src={imageSrc} alt={alt} />
        <div className="card-description">
            <h3 className="section-categories">{title} <span className="price">{price}</span></h3>
            <p>{description}</p>
            <Link to="/order-online" className="nav-item lead-text secondary-button">Order a delivery <img src={DeliveryIcon} className="delivery-icon" alt=""/></Link>
        </div>
    </article>
   );
}

export default MenuItem;
