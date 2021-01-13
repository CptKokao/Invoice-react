import React from 'react';

import './Video.scss';

const Video = () => {

  return (
    <section className="video">
        <div className="container">
          <div className="video__wrapper">
            <h2 className="video__title">invoice - more than just a payment</h2>
            <p className="video__desc">A payment is the voluntary tender of money or its equivalent or of things of value by one party (such as a person or company) to another in exchange for goods, or services provided by them, or to fulfill a legal obligation. The party making a payment is commonly called the payer, while the payee is the party receiving the payment.</p>
            <a className="btn video__btn" href="/#">watch video</a>
          </div>
        </div>
      </section>
  )
}

export default Video;