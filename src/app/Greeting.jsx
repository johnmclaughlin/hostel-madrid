import React, { Component } from 'react';
import axios from 'axios';

class GetGreeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greetings: []
    };
  }

  componentDidMount() {
    axios.get(`greeting.json`)
      .then(res => {
        const greetings = res.data
        this.setState({ greetings });
      });
  }

  render() {
    return (
        <div className="greetings__wrapper">
          {this.state.greetings.map(greeting =>
            <div className="greeting__container" key={greeting.id}>
                <div className="greeting__container--title"><span>{greeting.greeting}</span> {greeting.message}</div>
                <div className="greeting__container--copy">{greeting.copy}</div>
            </div>     
        )}
        </div>
    );
  }
}

export default GetGreeting;