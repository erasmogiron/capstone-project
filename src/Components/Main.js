import React from "react";
import DeliveryIcon from '../images/delivery-icon.png';
import GreekSaladImg from '../images/greek-salad.jpg';
import AdrianMario from '../images/adrian-and-mario.jpg';
import LittleLemonRestaurant from '../images/little-lemon-restaurant.jpg';


export default function Main() {
    return(
        <main>
            <header>
            <h2>This Week's Specials!</h2>
            <a href="#" role="button" className="primary-button">Online Menu</a>
            </header>
            <section>
                <div className="row">
                    <article className="card">
                        <img src={GreekSaladImg} alt=""/>
                        <h3>Greek Salad <span className="price">$12.99</span></h3>
                        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                        <a href="#" role="button" className="primary-button">Order a delivery <img src={DeliveryIcon} className="delivery-icon"/></a>
                    </article>
                    <article className="card">
                        <img src={GreekSaladImg} alt=""/>
                        <h3>Bruchetta <span className="price">$5.99</span></h3>
                        <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                        <a href="#" role="button" className="primary-button">Order a delivery <img src={DeliveryIcon} className="delivery-icon"/></a>
                    </article>
                    <article className="card">
                        <img src={GreekSaladImg} alt=""/>
                        <h3>Lemon Desert <span className="price">$5.00</span></h3>
                        <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <a href="#" role="button" className="primary-button">Order a delivery <img src={DeliveryIcon} className="delivery-icon"/></a>
                    </article>
                </div>
            </section>
        <section>
            <h2>Meet the Owners</h2>
            <h3>Adrian and Mario</h3>
            <p>This isa placeholder for the restaurant description. This isa placeholder for the restaurant description. This isa placeholder for the restaurant description. This isa placeholder for the restaurant description. This isa placeholder for the restaurant description. This isa placeholder for the restaurant description.</p>
            <img src={AdrianMario} alt="Adrian and Mario at Little Lemon restaurant kitchen" />
            <img src={LittleLemonRestaurant} alt="Interior of Little Lemon dining area" />
        </section>
        </main>
    )
}
