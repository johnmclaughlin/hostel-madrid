import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class GetMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: []
    };
  }

  render() {
    return (
        <div className="map__wrapper">
          This will be the map
        </div>
    );
  }
}

//export default GetMap;

ReactDOM.render(<GetMap />, document.querySelector('.content'));