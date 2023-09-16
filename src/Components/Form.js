import React from "react";
import Menu from "./Menu";
import Specials from "./Specials";

export default function Form() {
    return(
        <section className="container">
            <div className="row grid">
                <form>
                    <fieldset className="sub-title">Reservation Details</fieldset>
                    <p><label for="date">Date</label>
                    <input id="date" type="date" name="date" /></p>
                    <p><label for="time">Time</label>
                    <input id="time" type="time" name="time" /></p>

                    <p><label for="guests">Guests</label>
                    <input id="guests" type="number" name="guests"/></p>

                    <p><label for="seating">Seating</label>
                    <select id="seating" name="seating">
                        <option value="indoor">Indoor Seating</option>
                        <option value="outdoor">Outdoor Seating</option>
                    </select></p>
                    <p><label for="seating">Occasion</label>
                    <select id="occasion" name="occasion">
                        <option value="indoor">Birthday</option>
                        <option value="outdoor">Engagement</option>
                        <option value="outdoor">Anniversary</option>
                    </select></p>
                    <p><label for="notes">Occasion</label>
                        <textarea name="message" rows="5" cols="auto">
                    </textarea></p>

                    <fieldset className="sub-title">About You</fieldset>
                    <p><label for="first-name">First Name</label>
                    <input id="first-name" type="text" name="first-name" /></p>
                    <p><label for="last-name">Last Name</label>
                    <input id="last-name" type="text" name="last-name" /></p>
                    <p><label for="email">Email</label>
                    <input id="email" type="email" /></p>
                    <p><label for="phone">Phone<br/>(optional)</label>
                    <input id="phone" type="tel" name="phone" /></p>

                    <fieldset className="sub-title">Payment Info</fieldset>
                    <p><label for="name-on-card">Name on Card</label>
                    <input id="name-on-card" type="text" name="name-on-card" /></p>
                    <p><label for="credit-card">Credit card number</label>
                    <input type="text" id="credit-card" name="credit-card" placeholder="1111-2222-3333-4444" /></p>
                    <p><label for="cvv-code">CVV Code</label>
                    <input id="cvv-code" type="text" name="cvv-code" /></p>

                    <p><label for="expiration-date">Expiration Date</label>
                    <input type="text" id="expiration-date" name="expiration-date" placeholder="11/25" /></p>
                    <p><input type="submit" value="Submit" /></p>

                </form>
            </div>
        </section>
    )
}