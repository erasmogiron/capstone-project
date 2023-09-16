import React from "react";
import { reviews } from "./LittleLemonData";
import TestimonialItem from './TestimonialItem';


export default function Testimonials() {
    return (
        <section className="full-container testimonials">
            <h2 className="sub-title">Testimonials</h2>
            <div className="container">
                <div className="row testimonial-grid">
                        {reviews.map((review) => (
                            <TestimonialItem
                            key={review.name}
                            name={review.name}
                            rating={review.rating}
                            description={review.description}
                            imageSrc={review.getImageSrc()}
                            alt={review.alt}
                            />
                        ))}
                </div>
            </div>
        </section>
    )
}
