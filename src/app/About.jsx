import React, { Component } from 'react';

import Map from './Map.jsx';
import Promocard from './Promo.jsx';

class GetAbout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: []
    };
  }

  render() {
    return (
        <div className="about__wrapper">
            <div className="breadcrumb">Home / <span>About</span></div>
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

export default GetAbout;