import React from "react";
import Button from "../UI-components/Button";
import "./MentorGallery.scss";
class Mentor extends React.Component {
  render() {
    return (
      <div
        className="mentor_card"
        onClick={() => {
          this.props.setImageFunc(this.props.image);
          this.props.selectFunc(this.props.person);
        }}
      >
        <div>
          <img src={this.props.image} alt="img of mentor" />
        </div>
        <div className="person_tags">
          {this.props.tag.map((tag) => (
            <div className="mentor_tag">{tag}</div>
          ))}
        </div>

        <h2>{this.props.name}</h2>

        <p>{this.props.story}</p>

        <div className="button_wrapper">
          <Button text="learn more" primary />
        </div>
      </div>
    );
  }
}

export default Mentor;
