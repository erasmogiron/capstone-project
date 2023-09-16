import React from "react";

import MenuItem from "./MenuItem";

const dishes = [
 {
    id: 1,
    title: "Greek Salad",
    alt: "Greek Salad tomatoes, cucumbers, onion, feta cheese, and olives and dressed with salt",
    price: "$12.99",
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.", 
    getImageSrc: () => require("../images/greek-salad.jpg"),
 },
 {
    id: 2,
    title: "Bruschetta",
    alt: "Bruschetta with cheese and tomatoes",
    price: "$5.99",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.", 
    getImageSrc: () => require("../images/bruschetta.jpg"),
 },
 {
    id: 3,
    title: "Lemon Desert",
    alt: "Layered lemon cake dessert",
    price: "$5.00",
    description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.", 
    getImageSrc: () => require("../images/lemon-dessert.jpg"),
 },
{
    id: 4,
    title: "Tomato Soup",
    alt: "Velvet Tomato Soup",
    price: "$7.00",
    description: "Velvety smooth tomato soup accented with oregano and thyme.",
    getImageSrc: () => require("../images/tomato-soup.jpg"),

},
{
    id: 5,
    title: "Hummus",
    alt: "Hummus and crackers",
    price: "$5.00",
    description: "Refreshing flavors of the Mediterranean. Hummus and pita chips.",
    getImageSrc: () => require("../images/hummus.jpg"),

},
{
    id: 5,
    title: "Butternut Squash Soup",
    alt: "Roasted butter nut squash soup and pepitas",
    price: "$8.00",
    description: "Roasted butternut squash soup with sweet and nutty flavors.",
    getImageSrc: () => require("../images/butternut-squash-soup.jpg"),

},
];

const DishesMenu = () => {
 return (
            <section className="container">
                <div className="row">
                <div className="grid">
                        {dishes.map((dish) => (
                            <MenuItem
                            key={dish.title}
                            title={dish.title}
                            alt={dish.alt}
                            price={dish.price}
                            description={dish.description}
                            imageSrc={dish.getImageSrc()}
                            />
                        ))}
                </div>
                </div>
            </section>
 );
};

export default DishesMenu;
