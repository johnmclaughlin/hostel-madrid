import React, { Component } from 'react';

class GetFooter extends React.Component {


  componentDidMount() {

  }

  render() {
    return (
        <div className="footer">
        <div className="footer__container">
          <div className="footer__logo">
            <div className="footer__address">info@hostelmadrid<br />+34 914 200 583</div>
            </div>
          <div className="footer__social">
            <div className="footer__social--twitter"></div>
            <div className="footer__social--facebook"></div>
            <div className="footer__social--google"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default GetFooter;


