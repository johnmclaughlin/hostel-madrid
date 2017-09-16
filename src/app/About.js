import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Map from './Map.jsx';
import Promocard from './Promo.jsx';

export default class About extends Component {
  render() {
    return (
      <div className="about__wrapper">
            <div className="breadcrumb"><Link to="/">home</Link> / <span>About</span></div>
            <div className="about__info">
                <div className="about__info--title">about hotel madrid</div>
                <div className="about__info--copy">Nam pellentesque erat sit amet blandit semper. Duis volutpat dapibus fringilla. Mauris porta dignissim viverra. Phasellus pharetra, felis sed cursus consequat, leo libero imperdiet orci, non accumsan ante neque quis quam. Sed elit nisl, rhoncus et leo at, vestibulum ultrices sem.</div>
            </div>
            <Map />
            <div className="about__promo">
                <Promocard />
            </div>
        </div>
    );
  }
}