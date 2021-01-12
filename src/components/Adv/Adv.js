import React from 'react';

import './Adv.scss';
import imgCoding from './img/coding.jpg';
import imgCodingWebp from './img/coding.webp';
import imgDesign from './img/design.jpg';
import imgDesignWebp from './img/design.webp';

const Adv = () => {
  return (
    <section className="adv">
      <div className="container">
        <div className="bl bl--pseudo parallax-l">
          <div className="bl__desc">
            <h2 className="bl__title">F to respect</h2>
            <p className="bl__text">PHP is a general-purpose scripting language especially suited to web development. It was originally created by Danish-Canadian programmer</p>
            <a className="bl__more" href="/#">Learn more</a>
            <p>* On your own risk</p>
            <div className="adv__number">01<span>. </span></div>
          </div>
          <div className="bl__img">
            <div className="bl__img-name">coding</div>
            <picture>
              <source srcSet={imgCodingWebp} type="image/webp" />
              <img src={imgCoding} alt="Programming" width={615} height={395} />
            </picture>
          </div>
        </div>
        <div className="bl bl-reverse bl-reverse--pseudo parallax-r">
          <div className="bl__desc bl__desc--reverse">
            <h2 className="bl__title bl__title--reverse">Design</h2>
            <p className="bl__text bl__text--reverse"> Design is a plan or specification for the construction of an object or system or for the implementation</p>
            <a className="bl__more bl__more--reverse" href="/#">Learn more</a>
          </div>
          <div className="bl__img">
            <div className="bl__img-name bl__img-name--reverse">design</div>
            <picture>
              <source srcSet={imgDesignWebp} type="image/webp" />
              <img src={imgDesign} alt="Design" width={615} height={395} />
            </picture>
          </div>
          <div className="adv__number adv__number--reverse">02<span>.</span></div>
        </div>
      </div>
    </section>
  );
};

export default Adv;