import React, { Component } from 'react'
import { Link } from "react-router-dom";

import Footer from './Footer';

export default class Experience extends Component {
  render() {
    return (
        <div className="about__wrapper">
            <div className="greeting__container">
                <div className="breadcrumb"><Link to="/">home</Link> / <span>Experience</span></div>
                <div className="about__info">
                    <div className="about__info--title">Experience hotel madrid</div>
                    <div className="about__info--copy">Nam pellentesque erat sit amet blandit semper. Duis volutpat dapibus fringilla. Mauris porta dignissim viverra. Phasellus pharetra, felis sed cursus consequat, leo libero imperdiet orci, non accumsan ante neque quis quam. Sed elit nisl, rhoncus et leo at, vestibulum ultrices sem.</div>
                </div>
            </div>
            <Footer />
        </div>
    );
  }
}