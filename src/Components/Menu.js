import React from "react";
import { dishes } from "./LittleLemonData";
import MenuItem from "./MenuItem";

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
