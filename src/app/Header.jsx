import React, { Component } from 'react';

class GetNav extends React.Component {

  render() {
    return (
        <div className="navigation">
        <ul>
          <li>about</li>
          <li>experience</li>
          <li className="logo">home</li>
          <li>contact</li>
          <li>search</li>
        </ul>
      </div>
    );
  }
}

export default GetNav;