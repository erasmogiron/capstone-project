import React from "react";
import { littleLemon } from "./LittleLemonData";
import AboutItem from "./AboutItem";

   const About = () => {
    return (
        <section className="container">
            <div className="row grid">
                           {littleLemon.map((about) => (
                               <AboutItem
                               key={about.id}
                               title={about.title}
                               ourStoryTitle={about.ourStoryTitle}
                               owners={about.owners}
                               ownerBio={about.ownerBio}
                               restaurant={about.restaurant}
                               aboutAdrian={about.aboutAdrian}
                               imageSrc={about.getImageSrc()}
                               alt={about.alt}
                               />
                           ))}
                </div>
            </section>
    );
   };
   export default About;