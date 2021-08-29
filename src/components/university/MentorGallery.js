import React from "react";

import "./MentorGallery.css"

class MentorGallery extends React.Component {
  render() {
    return (
      <div className="mentor-gallery">
        {this.props.children}
      </div>
    );
  }
}

class Mentor extends React.Component {
  render() {
    return (
      <div className="mentor-card">
        <div className="image-wrapper">
          <img src={this.props.image} />
        </div>
        <h2>{this.props.name}</h2>
        <div className="text">
          <h3>My Story</h3>
          <p>{this.props.story}</p>
        </div>
      </div>
    );
  }
}

export {MentorGallery, Mentor}
  