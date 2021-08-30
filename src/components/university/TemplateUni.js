import MentorGallery from "./MentorGallery";
import { Modal } from "semantic-ui-react";
import Button from "../UI-components/Button";
import React from "react";
import fire from "../../fire";
import "./TemplateUni.scss";

class TemplateUniversity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      person: {},
      auth: false,
    };

    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          open: this.state.open,
          person: this.state.person,
          auth: true,
        });
      } else {
        this.setState({
          open: this.state.open,
          person: this.state.person,
          auth: false,
        });
      }
    });
  }

  selectPerson = (p) => {
    this.setState({
      open: true,
      person: p,
      auth: this.state.auth,
    });
  };

  setImage = (i) => {
    this.setState({
      open: this.state.open,
      person: this.state.person,
      auth: this.state.auth,
    });
  };

  setOpen = (b) => {
    this.setState({
      open: b,
      person: this.state.person,
      auth: this.state.auth,
    });
  };

  setPerson = (p) => {
    this.setState({
      open: this.state.open,
      person: p,
      auth: this.state.auth,
    });
  };

  render() {
    return (
      <div className="uni-page">
        <h1 className="title">{this.props.name}</h1>
        <img
          src={this.props.image}
          className="university-logo"
          alt="uni logo"
        />
        <div
          className="aerial-wrapper"
          style={{
            backgroundImage:
              "url(" +
              "https://images.pexels.com/photos/137618/pexels-photo-137618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" +
              ")",
          }}
        ></div>
        <p className="instructions">
          Find a mentor you're interested in learning more from and book a
          virtual coffee chat with them! You can use the filters to help narrow
          down your search.
        </p>

        <MentorGallery
          selectFunc={this.selectPerson}
          setImageFunc={this.setImage}
        />

        <Modal
          onClose={() => this.setOpen(false)}
          onOpen={() => this.setOpen(true)}
          open={this.state.open}
        >
          <Modal.Content>
            <div className="img-wrapper">
              <img src={this.state.person.image} alt="mentor"/>
            </div>
            <h1>{this.state.person.name}</h1>
            <p>{this.state.person.story}</p>
            {this.state.auth ? (
              <div className="button-wrapper">
                <a
                  href="https://calendly.com/coffee-hours-mentor/30min"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button text="☕ book a virtual coffee with me!" primary />
                </a>
              </div>
            ) : (
              <p className="loggedout">
                <a href="/signin">Log in</a> to book a session with this mentor!
              </p>
            )}
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default TemplateUniversity;
