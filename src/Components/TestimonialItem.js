import React from "react";

const MenuItem = ({ name, alt, description, rating, imageSrc }) => {
   return (
                    <article className="col testimonial tan">
                        <p className="testimonial--rating">Rating <img src={rating} alt="" className="star-rating"/></p>
                        <div className="testimonial--author">
                            <img src={imageSrc} alt={alt} />
                            <p className="lead-text">{name}</p>
                        </div>
                        <p className="testimonial--description">{description}</p>
                    </article>
   );
}

export default MenuItem;
