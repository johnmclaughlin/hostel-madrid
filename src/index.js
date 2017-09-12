require('./assets/stylesheets/styles.scss');

//import React from 'react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Masthead from './app/Masthead.jsx';
import Topic from './app/Topic.jsx';
import Promo from './app/Promo.jsx';

ReactDOM.render(<Masthead />, document.getElementById('masthead'));
ReactDOM.render(<Topic />, document.querySelector('.topic1'));
ReactDOM.render(<Promo />, document.querySelector('.promo1'));