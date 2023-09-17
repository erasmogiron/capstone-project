import React from "react";

export default function Main() {
/* week 2 managing state in React  */
    const [availableTimes] = React.useState([
        {reservationTime: "17:00", id: 1},
        {reservationTime: "18:00", id: 2},
        {reservationTime: "19:00", id: 3},
        {reservationTime: "20:00", id: 4},
        {reservationTime: "21:00", id: 5},
        {reservationTime: "22:00", id: 6}
    ]);
let timesToRender;
if(availableTimes) {
    timesToRender = availableTimes.map(value => {
        return <option key={value.id}>{value.reservationTime}</option>
    })
}
    return (
        <>
        {timesToRender}
        </>
    )
}