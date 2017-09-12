import React, { Component } from 'react';
import axios from 'axios';

class GetTopics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: []
    };
  }

  componentDidMount() {
    axios.get(`topics.json`)
      .then(res => {
        const topics = res.data
        this.setState({ topics });
      });
  }

  render() {
    return (
        <div className="topic__wrapper">
          {this.state.topics.map(topic =>
            <div className={"topic__container " + topic.icon} key={topic.id}>
                <div className="topic__container--title">{topic.title}</div>
                <div className="topic__container--description">{topic.copy}</div>
            </div>     
        )}
        </div>
    );
  }
}

export default GetTopics;