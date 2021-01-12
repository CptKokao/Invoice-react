import React from 'react';

import './About.scss';
import img from './about.jpg';
import imgWebp from './about.webp';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about__wrapper bl bl-reverse bl-reverse--pseudo parallax-r">
          <div className="bl__desc about__desc">
              <h2 className="bl__title">About us</h2>
              <p className="bl__text">We are a team of professionals in the payment processing and other cool integration in acquiring system</p>
              <a className="bl__more" href="/#">Learn more</a>
          </div>
          <div className="bl__img">
              <div className="bl__img-name bl__img-name--reverse">about</div>
              <picture>
                  <source srcSet={imgWebp} type="image/webp" />
                  <img src={img} alt="About" width="615" height="395" />
              </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;