import React from "react";
import TestimonialImg from '../images/user-1.jpg';
import TestimonialImg2 from '../images/user-2.jpg';
import TestimonialImg3 from '../images/user-3.jpg';
import TestimonialImg4 from '../images/user-4.jpg';
import FourStars from '../images/four-stars.png';
import FiveStars from '../images/five-stars.png';

export default function Testimonials() {
    return (
        <section className="full-container testimonials">
            <h2 className="sub-title">Testimonials</h2>
            <div className="container">
                <div className="row grid">
                    <article className="col testimonial tan">
                        <p className="testimonial--rating">Rating <img src={FiveStars} alt="" className="star-rating"/></p>
                        <div className="testimonial--author">
                            <img src={TestimonialImg} alt="" />
                            <p className="lead-text">Megan</p>
                        </div>
                        <p className="testimonial--description">The best service and great outdoor space.</p>
                    </article>
                    <article className="col testimonial light">
                    <p className="testimonial--rating">Rating <img src={FourStars} alt="" className="star-rating"/></p>
                        <div className="testimonial--author">
                            <img src={TestimonialImg2} alt="" />
                            <p className="lead-text">Rachel</p>
                        </div>
                        <p className="testimonial--description">Online ordering and delivery is great.</p>
                    </article>
                    <article className="col testimonial tan">
                    <p className="testimonial--rating">Rating <img src={FiveStars} alt="" className="star-rating"/></p>
                        <div className="testimonial--author">
                            <img src={TestimonialImg3} alt="" />
                            <p className="lead-text">Allen</p>
                        </div>
                        <p className="testimonial--description">Best taste in Chicago.</p>
                    </article>
                    <article className="col testimonial light">
                    <p className="testimonial--rating">Rating <img src={FiveStars} alt="" className="star-rating"/></p>
                        <div className="testimonial--author">
                            <img src={TestimonialImg4} alt="" />
                            <p className="lead-text">Jackson</p>
                        </div>
                        <p className="testimonial--description">Love teh new online reservation feature!</p>
                    </article>
                </div>
            </div>
        </section>
    )
}