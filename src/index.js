require('./assets/stylesheets/styles.scss');

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import App from './app/App.jsx';

//ReactDOM.render(<App />, document.querySelector('.content'));

import Header from './app/Header.jsx';
import Greeting from './app/Greeting.jsx';
import Masthead from './app/Masthead.jsx';
import Topic from './app/Topic.jsx';
import Promocard from './app/Promo.jsx';

ReactDOM.render(<Header />, document.querySelector('.navigation'));
ReactDOM.render(<Masthead />, document.querySelector('.masthead'));
ReactDOM.render(<Greeting />, document.querySelector('.greeting'));
ReactDOM.render(<Topic />, document.querySelector('.topics'));
ReactDOM.render(<Promocard />, document.querySelector('.promocards'));