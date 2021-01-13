import React from 'react';

import './Work.scss';

import imgProduct from './img/product.png';
import imgProductWebp from './img/product.webp';
import imgSkill from './img/skill.png';
import imgSkillWebp from './img/skill.webp';
import imgQuality from './img/quality.png';
import imgQualityWebp from './img/quality.webp';

const Work = () => {

  const magnit = () => {
    document.addEventListener('DOMContentLoaded', () => {
    
      this.forEach((item) => {
        item.addEventListener('mouseenter', () => {
    
          item.classList.remove('mousemove-unit--return');
          item.classList.add('mousemove-unit--entered');
    
          setTimeout(() => {
            item.classList.remove('mousemove-unit--entered');
          }, 200);
        });
    
        this.addEventListener('mousemove', (event) => {
          var parentHeight = item.clientHeight;
          var parentWidth = item.clientWidth;
          var relX = event.pageX - item.offsetLeft;
          var relY = event.pageY - item.offsetTop;
          var mousePercentsX = relX / parentWidth * 100 - 50;
          var mousePercentsY = relY / parentHeight * 100 - 50;
          var x1 = 1 - Math.abs(mousePercentsX) / 10000;
          // var x2 = mousePercentsY / 10000;
          var x3 = 0;
          var x4 = mousePercentsX / 2000000;
          var x5 = -mousePercentsX / 1000000;
          var x6 = 1 - Math.abs(mousePercentsY) / 10000;
          var x7 = 0;
          var x8 = mousePercentsY / 2000000;
          var x9 = 0;
          var x10 = 0;
          var x11 = 1 - Math.abs(mousePercentsX) / 10000 - Math.abs(mousePercentsY) / 10000;
          var x12 = 0;
          var x13 = 20 * (mousePercentsX / 50);
          var x14 = 20 * (mousePercentsY / 50);
          var x15 = 0;
          var x16 = 1;
    
          var transformMatrix = x1 + ',' + 0 + ',' + x3 + ',' + x4 + ',' + x5 + ',' + x6 + ',' + x7 + ',' + x8 + ',' + x9 + ',' + x10 + ',' + x11 + ',' + x12 + ',' + x13 + ',' + x14 + ',' + x15 + ',' + x16;
          item.style.transform = `matrix3d(${transformMatrix})`;
        });
    
        this.addEventListener('mouseleave', () => {
          item.classList.add('mousemove-unit--return');
        });
      });
    });
  }

  return (
    <section className="work">
      <div className="container">
        <h2 className="work__title">Invoice – its work</h2>
        <p className="work__desc">We create unique payment product.<br /> Look at the short video about our system.</p>
        <div className="work__wrapper">
          <div className="work__item mousemove-unit"><a href="/#">
              <div className="work__img" onClick={magnit}>
                <picture>
                  <source srcSet={imgProductWebp} type="image/webp" />
                  <img src={imgProduct} width={245} height={245} alt="Product" /></picture>
              </div></a>
            <p>Innovative Product</p>
          </div>
          <div className="work__item mousemove-unit"><a href="/#">
              <div className="work__img">
                <picture>
                  <source srcSet={imgSkillWebp} type="image/webp" />
                  <img src={imgSkill} width={245} height={245} alt="Skill" /></picture>
              </div></a>
            <p>High-level Skills</p>
          </div>
          <div className="work__item mousemove-unit"><a href="/#">
              <div className="work__img">
                <picture>
                  <source srcSet={imgQualityWebp} type="image/webp" />
                  <img src={imgQuality} width={245} height={245} alt="Quality" />
                </picture>
              </div></a>
            <p>Quality Products</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work;