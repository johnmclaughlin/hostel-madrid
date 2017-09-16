import React, { Component } from 'react';

import Greeting from './Greeting.jsx';
import Masthead from './Masthead.jsx';
import Topic from './Topic.jsx';
import Promocard from './Promo.jsx';
import Footer from './Footer';

export default class Home extends Component {
  render() {
    return (
      <div className="content">
          <Masthead />
          <Greeting />
          <div className="content__container">
              <div className="content__left topics"><Topic /></div>
              <div className="content__right promocards home__promo"><Promocard /></div>
          </div>
          <Footer />
      </div>
    );
  }
}
 