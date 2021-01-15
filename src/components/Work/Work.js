import React from 'react';

import './Work.scss';

import imgProduct from './img/product.png';
import imgProductWebp from './img/product.webp';
import imgSkill from './img/skill.png';
import imgSkillWebp from './img/skill.webp';
import imgQuality from './img/quality.png';
import imgQualityWebp from './img/quality.webp';

const Work = () => {

  /* 
  Есть 'дрож' при наведении, возможно нужно 
  править верстку, через js не получилось исправить 
  */
  const magnet = (e) => {
    
    e.preventDefault();

    const target = e.target.parentElement;

    // Проверка что Target ожидаемый элемент(.work__item)
    if (target.classList.contains('work__item')) {
      target.classList.remove('mousemove-unit--return');
      target.classList.add('mousemove-unit--entered');
  
      setTimeout(() => {
        target.classList.remove('mousemove-unit--entered');
      }, 200);
  
  
      target.addEventListener('mousemove', (event) => {
        var parentHeight = target.clientHeight;
        var parentWidth = target.clientWidth;
        var relX = event.pageX - target.offsetLeft;
        var relY = event.pageY - target.offsetTop;
        var mousePercentsX = relX / parentWidth * 100 - 50;
        var mousePercentsY = relY / parentHeight * 100 - 50;
        var x1 = 1 - Math.abs(mousePercentsX) / 10000;
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
        target.style.transform = `matrix3d(${transformMatrix})`;
      });
  
      target.addEventListener('mouseleave', () => {
        target.classList.add('mousemove-unit--return');
      });
    }
  }

  const items = [
    {title: 'Innovative Product', href: '/#', img: imgProduct, imgWebp: imgProductWebp, alt: 'Product'},
    {title: 'High-level Skills', href: '/#', img: imgSkill, imgWebp: imgSkillWebp, alt: 'Skill'},
    {title: 'Quality Products', href: '/#', img: imgQuality, imgWebp: imgQualityWebp, alt: 'Quality'},
  ];

  const workItem = items.map((item) => 
    <div className="work__item mousemove-unit" key={item.title}>
      <a href={item.href}>
        <div className="work__img">
          <picture>
            <source srcSet={item.imgWebp} type="image/webp" />
            <img src={item.img} width={245} height={245} alt={item.alt} />
          </picture>
        </div>
      </a>
      <p>{item.title}</p>
    </div>
  );


  return (
    <section className="work">
      <div className="container">
        <h2 className="work__title">Invoice – its work</h2>
        <p className="work__desc">We create unique payment product.<br /> Look at the short video about our system.</p>
        <div className="work__wrapper" onMouseEnter={magnet}>
          {workItem}
        </div>
      </div>
    </section>
  )
}

export default Work;