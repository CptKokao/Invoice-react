import React from 'react';

import './Slider.scss';
import './SwiperSetting.scss';
import './Nav.scss';
import './Hamburgers.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';

import imgMouse from './img/mouse.svg';
import imgShare from './img/share.svg';
import imgInfo from './img/info.svg';

// Install modules
SwiperCore.use([Pagination]);

const Slider = () => {

  const test = () => {
    console.log('test');
  }

  return (

    <header className="sl">
      {/* Swiper имеет class="swiper-container" */}
      <Swiper
        pagination={{ clickable: true }}
      >

        {/* Swiper имеет class="swiper-wrapper" */}
        <SwiperSlide>
          <div className="swiper-slide">
            <div className="container sl-wrapper">
              <div className="sl__number">01 </div>
              <p className="sl__title">Invoice</p>
              <a className="btn sl__btn" href="/#">Learn more </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="container sl-wrapper">
              <div className="sl__number">02 </div>
              <p className="sl__title">Invoice</p>
              <a className="btn sl__btn" href="/#">Learn more </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="container sl-wrapper">
              <div className="sl__number">03 </div>
              <p className="sl__title">Invoice</p>
              <a className="btn sl__btn" href="/#">Learn more </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="container sl-wrapper">
              <div className="sl__number">04 </div>
              <p className="sl__title">Invoice</p>
              <a className="btn sl__btn" href="/#">Learn more </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="sl__mouse">
        <img className="wibro" src={imgMouse} width={20} height={30} alt="Mouse" />
        <p>Scroll</p>
      </div>
      <a className="share" href="/#">
        <img src={imgShare} width={25} height={25} alt="Share" />
      </a>


      {/* nav */}
      <div className="nav container-fluid">
        <button onClick={test} className="hamburger hamburger--collapse" type="button" aria-label="Menu">
          <span className="hamburger-box"><span className="hamburger-label">Menu</span>
          <span className="hamburger-inner" /></span>
        </button>
        <h1 className="logo">Invoice // test</h1>

        {/* mobile nav */}
        <nav>
          <ul>
            <li> <a href="/#">Home</a></li>
            <li> <a href="/#">Products</a></li>
            <li> <a href="/#">About</a></li>
          </ul>
        </nav>

        {/* info */}
        <a className="info" href="/#">
          <img src={imgInfo} width={23} height={23} alt="Info" />
        </a>
        <div className="lang">EN</div>
      </div>
    </header>
    
  )
};

export default Slider;