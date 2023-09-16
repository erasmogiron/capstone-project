import React from "react";
import TestimonialItem from './TestimonialItem';

const reviews = [
    {
       id: 1,
       name: "Megan",
       rating: require("../images/five-stars.png"),
       description: "The best service and great outdoor space.",
       getImageSrc: () => require("../images/user-1.jpg"),
       alt: "Megan smiling",
    },
    {
       id: 2,
       name: "Rachel",
       rating: require("../images/four-stars.png"),
       description: "Online ordering and delivery is great.",
       getImageSrc: () => require("../images/user-2.jpg"),
       alt: "Rachel smiling",
    },
    {
       id: 3,
       name: "Allen",
       description: "Best taste in Chicago.",
       rating: require("../images/five-stars.png"),
       getImageSrc: () => require("../images/user-3.jpg"),
       alt: "Allen smiling",
    },
   {
       id: 4,
       name: "Jackson",
       rating: require("../images/five-stars.png"),
       description: "Love teh new online reservation feature!",
       getImageSrc: () => require("../images/user-4.jpg"),
       alt: "Jackson smiling",
   },
   ];

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
