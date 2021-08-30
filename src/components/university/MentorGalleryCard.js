import React from "react";
import Button from "../UI-components/Button";
import "./MentorGalleryCard.css";
class Mentor extends React.Component {
  render() {
    return (
      <div
        className="mentor-card"
        onClick={() => {
          this.props.setImageFunc(this.props.image);
          this.props.selectFunc(this.props.person);
        }}
      >
        <div className="image-wrapper">
          <img src={this.props.image} alt="img of mentor" />
        </div>
        <div className="my_tag">{this.props.tag}</div>
        <h2>{this.props.name}</h2>
        <div className="text">
          <p>{this.props.story}</p>
        </div>
        <div className="button-wrapper">
          <Button text="learn more" primary />
        </div>
      </div>
    );
  }
}

export default Mentor;
