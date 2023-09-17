import React from "react";
import { useState } from "react";

export default function Form() {
    const availableTimes = ["17:00","18:00","19:00","20:00","21:00","22:00"];

    const [reservationDate, setReservationDate] = useState("");
    const [reservationTime, setReservationTime] = useState(availableTimes);
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const clearForm = () => {
        setReservationDate("");
        setReservationTime("");
        setGuests({
            value: "0",
            isTouched: false,
          });
        setOccasion({
          value: "Occasion",
          isTouched: false,
        });
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Table Reserved!");
        clearForm()
    };


    return(
        <section className="container">
            <div className="row grid">
                <form onSubmit={handleSubmit}>
                    <fieldset className="sub-title">Reservation Details</fieldset>
                    <p>
                    <label htmlFor="res-date">Choose date</label>
                    <input
                        type="date"
                        id="res-date"
                        value={reservationDate}
                        onChange={(e) => setReservationDate(e.target.value)}
                    />
                    </p>
                    <p>
                    <label htmlFor="res-time">Choose time</label>
                    <select
                        id="res-time"
                        value={reservationTime}
                        onChange={(e) => setReservationTime(e.target.value)}
                    >
                        <option>17:00</option>
                        <option>18:00</option>
                        <option>19:00</option>
                        <option>20:00</option>
                        <option>21:00</option>
                        <option>22:00</option>
                    </select>
                    </p>
                    <p>
                    <label htmlFor="guests">Number of guests</label>
                    <input
                        type="number"
                        placeholder="1"
                        min="1"
                        max="10"
                        id="guests"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                    />
                    </p>
                    <p>
                    <label htmlFor="occasion">Occasion</label>
                    <select
                        id="occasion"
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                    >
                        <option>Birthday</option>
                        <option>Engagement</option>
                        <option>Anniversary</option>
                    </select>
                    </p>
                    <p>
                    <input disabled={!occasion} type="submit" value="Make Your reservation" />
                    </p>
                </form>
            </div>
        </section>
    )
}