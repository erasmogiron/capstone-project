import React from "react";
import TestimonialImg from '../images/user-1.jpg';

export default function Testimonials() {
    return (
        <section>
            <h2>Testimonials</h2>
            <div className="row">
                <article className="col testimonial">
                    <span className="testimonial--rating">Author Rating</span>
                    <img src={TestimonialImg} alt="" />
                    <p className="testimonial--author">Author Name</p>
                    <p className="testimonial--description">Short description of testimonial goes here.</p>
                </article>
                <article className="col testimonial">
                    <span className="testimonial--rating">Author Rating</span>
                    <img src={TestimonialImg} alt="" />
                    <p className="testimonial--author">Author Name</p>
                    <p className="testimonial--description">Short description of testimonial goes here.</p>
                </article>
                <article className="col testimonial">
                    <span className="testimonial--rating">Author Rating</span>
                    <img src={TestimonialImg} alt="" />
                    <p className="testimonial--author">Author Name</p>
                    <p className="testimonial--description">Short description of testimonial goes here.</p>
                </article>
                <article className="col testimonial">
                    <span className="testimonial--rating">Author Rating</span>
                    <img src={TestimonialImg} alt="" />
                    <p className="testimonial--author">Author Name</p>
                    <p className="testimonial--description">Short description of testimonial goes here.</p>
                </article>
            </div>
        </section>
    )
}