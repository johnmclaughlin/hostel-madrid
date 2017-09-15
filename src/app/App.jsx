import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import Greeting from './Greeting.jsx';
import Masthead from './Masthead.jsx';
import Topic from './Topic.jsx';
import Promocard from './Promo.jsx';

ReactDOM.render(<Header />, document.querySelector('.navigation'));
ReactDOM.render(<Masthead />, document.querySelector('.masthead'));
ReactDOM.render(<Greeting />, document.querySelector('.greeting'));
ReactDOM.render(<Topic />, document.querySelector('.topics'));
ReactDOM.render(<div className="home__promo"><Promocard /></div>, document.querySelector('.promocards'));