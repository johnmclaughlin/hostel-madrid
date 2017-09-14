require('./assets/stylesheets/styles.scss');

//import React from 'react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Greeting from './app/Greeting.jsx';
import Masthead from './app/Masthead.jsx';
import Topic from './app/Topic.jsx';
import Promocard from './app/Promo.jsx';

ReactDOM.render(<Masthead />, document.getElementById('masthead'));
ReactDOM.render(<Greeting />, document.querySelector('.greeting'));
ReactDOM.render(<Topic />, document.querySelector('.topics'));
ReactDOM.render(<Promocard />, document.querySelector('.promocards'));