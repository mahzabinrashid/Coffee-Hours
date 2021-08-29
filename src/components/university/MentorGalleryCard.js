import React from "react";
import Button from "../UI-components/Button";
import "./MentorGalleryCard.css";
class Mentor extends React.Component {
  render() {
    return (
      <div className="mentor-card">
        <div className="image-wrapper">
          <img src={this.props.image} alt="img of mentor" />
        </div>
        <a className="my_tag">
       {this.props.tag}
        </a>
        <h2>{this.props.name}</h2>
        <div className="text">
          <h3>My Story</h3>
          <p>{this.props.story}</p>
        </div>
        <Button text="☕ book a virtual coffee with me!" primary />
      </div>
    );
  }
}

export default Mentor;
