import React from "react";
import DeliveryIcon from '../images/delivery-icon.png';
import GreekSaladImg from '../images/greek-salad.jpg';
import BruchettaImg from '../images/bruchetta.jpg';
import LemonDessertImg from '../images/lemon-dessert.jpg';

export default function Main() {
    return(
        <main>
            <header className="container">
                <div className="row flex">
                    <h2 className="display-title">This Weeks Specials!</h2>
                    <a href="#" role="button" className="primary-button lead-text">Online Menu</a>
                </div>
            </header>
            <section className="container">
                <div className="row">
                <div className="grid">
                    <article className="card">
                        <img src={GreekSaladImg} alt=""/>
                        <div className="card-description">
                            <h3 className="section-categories">Greek Salad <span className="price">$12.99</span></h3>
                            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                            <a href="#" role="button" className="lead-text secondary-button">Order a delivery <img src={DeliveryIcon} className="delivery-icon"/></a>
                        </div>
                    </article>
                    <article className="card">
                        <img src={BruchettaImg} alt=""/>
                        <div className="card-description">
                            <h3 className="section-categories">Bruschetta <span className="price">$5.99</span></h3>
                            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                            <a href="#" role="button" className="lead-text secondary-button">Order a delivery <img src={DeliveryIcon} className="delivery-icon"/></a>
                        </div>
                    </article>
                    <article className="card">
                        <img src={LemonDessertImg} alt=""/>
                            <div className="card-description">
                            <h3 className="section-categories">Lemon Desert <span className="price">$5.00</span></h3>
                            <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                            <a href="#" role="button" className="lead-text secondary-button">Order a delivery <img src={DeliveryIcon} className="delivery-icon"/></a>
                        </div>
                    </article>
                </div>
                </div>
            </section>
        </main>
    )
}
