import React from "react";

export default function Form() {
    return(
        <section className="container">
            <div className="row">
                <form>
                    <fieldset className="sub-title">Reservation Details</fieldset>
                    <p><label for="date">Date</label>
                    <input id="date" type="date" /></p>
                    
                    <p><label for="time">Time</label>
                    <input id="time" type="time" /></p>

                    <p><label for="guests">Guests</label>
                    <input id="guests" type="number" /></p>

                    <p><label for="seating">Seating</label>
                    <select id="seating" name="seating">
                        <option value="indoor">Indoor Seating</option>
                        <option value="outdoor">Outdoor Seating</option>
                    </select></p>
                    
                    <p><label for="seating">Occacion</label>
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
                    <input id="first-name" type="text" /></p>
                    
                    <p><label form="last-name">Last Name</label>
                    <input id="last-name" type="text" /></p>
                    
                    <p><label form="email">Email</label>
                    <input id="email" type="email" /></p>
                    
                    <p><label for="phone">Phone<br/>(optional)</label>
                    <input id="phone" type="tel" /></p>

                    <fieldset className="sub-title">Payment Info</fieldset>
                    
                    <p><label for="name-on-card">Name on Card</label>
                    <input id="name-on-card" type="text" /></p>
                    
                    <p><label for="credit-card">Credit card number</label>
                    <input type="text" id="credit-card" name="credit-card" placeholder="1111-2222-3333-4444" /></p>
                    
                    <p><label for="cvv-code">CVV Code</label>
                    <input id="cvv-code" type="text" /></p>

                    <p><label for="expiration-date">Expiration Date</label>
                    <input type="text" id="expyear" name="expyear" placeholder="11/25" /></p>

                </form>
            </div>
        </section>
    )
}