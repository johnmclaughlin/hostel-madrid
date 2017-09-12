import React, { Component } from 'react';

var title = "location";
var description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas laoreet sapien lorem, vel laoreet ex aliquam ac. Donec accumsan mattis augue.";

const topic = () => {
    return (
        <div className="topic__container">
            <div className="topic__container-title">{title}</div>
            <div className="topic__container-description">{description}</div>
        </div>
    )
}

export default topic;