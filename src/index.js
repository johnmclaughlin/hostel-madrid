require('./assets/stylesheets/styles.scss');

//import React from 'react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Masthead from './app/Masthead.jsx';

ReactDOM.render(<Masthead />, document.getElementById('masthead'));