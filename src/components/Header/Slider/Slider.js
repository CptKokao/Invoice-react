import React, {Component} from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';

import './Slider.scss';
import './SwiperSetting.scss';

import Hamburger from '../Hamburger/Hamburger';
import Nav from '../Nav/Nav';

import imgMouse from './img/mouse.svg';
import imgShare from './img/share.svg';
import imgInfo from './img/info.svg';

// Install modules
SwiperCore.use([Pagination]);

class Slider extends Component {

  state = {
    menuActive: false
  }

  updateState = (value) => {
    this.setState({ menuActive: value })
  }

  render() {

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
        </Swiper>

        {/* MOUSE */}
        <div className="sl__mouse">
          <img className="wibro" src={imgMouse} width={20} height={30} alt="Mouse" />
          <p>Scroll</p>
        </div>

        {/* SHARE */}
        <a className="share" href="/#">
          <img src={imgShare} width={25} height={25} alt="Share" />
        </a>
  
        {/* HEADER NAVIGATION */}
        <div className="nav container-fluid">

          {/* HAMBURGER */}
          <Hamburger menuActive = {this.state.menuActive} updateState={this.updateState}/>
          <h1 className="logo">Invoice // test</h1>

          {/* NAVIGATION */}
          <Nav menuActive = {this.state.menuActive}/>
  
          {/* INFO */}
          <a className="info" href="/#">
            <img src={imgInfo} width={23} height={23} alt="Info" />
          </a>

          {/* LANG */}
          <div className="lang">EN</div>
        </div>
      </header>
    )
  }
};

export default Slider;