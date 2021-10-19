import React from 'react';
import './About.css';
const About = () => {
    return (
        <>
            <div className="row overflow-hidden">
                <h2 className="mt-3">Our Mission</h2>
                <div className="col-md-6 mt-5">
                    <img className="img-fluid mission-img " src="https://i.ibb.co/R06YLgN/mm.jpg" alt="" />
                </div>

                <div className="col-md-6 mt-5 ">
                    <p>Our purpose is to pass on empowering knowledge and training guidance in order to have a positive impact on the health and fitness of everyone we work with.To provide a personalised health and fitness service that unlocks every individual’s true potential so they can achieve their desired goals.As a multi-faceted fitness and health company which is encompassed by the talents of many diversely skilled professionals, we have sought to establish a set of mutually agreed core values to help underpin the success of our overall mission and ensuing philosophy.

                        It is these values which every new client will see come to life when their training journey begins, as they drive us as trainers each day to achieve the positive results that everyone we work with desires.</p>
                </div>

            </div>

        </>
    );
};

export default About;